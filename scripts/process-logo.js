import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const inputPath = 'C:/Users/gokul/.gemini/antigravity-ide/brain/8abd661a-1e4f-4f98-87b7-aaa8693de660/.user_uploaded/media_1791212264728.png';
const buf = fs.readFileSync(inputPath);

let offset = 8;
const idatChunks = [];
let width = 167, height = 167;

while (offset < buf.length) {
  const len = buf.readUInt32BE(offset);
  const type = buf.slice(offset + 4, offset + 8).toString('ascii');
  if (type === 'IDAT') idatChunks.push(buf.slice(offset + 8, offset + 8 + len));
  offset += 12 + len;
}

const decompressed = zlib.inflateSync(Buffer.concat(idatChunks));
const stride = width * 4 + 1;

// Unfilter PNG scanlines
const raw = Buffer.alloc(width * height * 4);
let prevRow = Buffer.alloc(width * 4);

for (let y = 0; y < height; y++) {
  const filter = decompressed[y * stride];
  const rowSrc = decompressed.slice(y * stride + 1, (y + 1) * stride);
  const rowDst = raw.slice(y * width * 4, (y + 1) * width * 4);

  for (let x = 0; x < width * 4; x++) {
    const a = x >= 4 ? rowDst[x - 4] : 0;
    const b = prevRow[x];
    const c = x >= 4 ? prevRow[x - 4] : 0;
    let val = rowSrc[x];
    if (filter === 0) {}
    else if (filter === 1) val = (val + a) & 0xff;
    else if (filter === 2) val = (val + b) & 0xff;
    else if (filter === 3) val = (val + Math.floor((a + b) / 2)) & 0xff;
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      let pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
      val = (val + pr) & 0xff;
    }
    rowDst[x] = val;
  }
  rowDst.copy(prevRow);
}

// Generate the output buffer with the luxury gold ring replacing the red/pink Instagram story ring
const cx = (width - 1) / 2;
const cy = (height - 1) / 2;

const out = Buffer.alloc(width * height * 4);

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const outIdx = (y * width + x) * 4;
    const inIdx = (y * width + x) * 4;

    if (dist < 71.5) {
      // Inside the white circular logo disc:
      // Keep the original illustration (woman with jewelry + Mee Shine Jewels text on white)
      out[outIdx] = raw[inIdx];
      out[outIdx + 1] = raw[inIdx + 1];
      out[outIdx + 2] = raw[inIdx + 2];
      out[outIdx + 3] = 255;
    } else if (dist < 72.5) {
      // Smooth inner transition from white disc to gold ring
      const t = dist - 71.5;
      const baseR = raw[inIdx];
      const baseG = raw[inIdx + 1];
      const baseB = raw[inIdx + 2];
      const goldR = 175, goldG = 140, goldB = 65;
      out[outIdx] = Math.round(baseR * (1 - t) + goldR * t);
      out[outIdx + 1] = Math.round(baseG * (1 - t) + goldG * t);
      out[outIdx + 2] = Math.round(baseB * (1 - t) + goldB * t);
      out[outIdx + 3] = 255;
    } else if (dist <= 80.0) {
      // The Gold Ring (replaces the red/pink Instagram ring!)
      const angle = Math.atan2(dy, dx);
      // Metallic champagne gold highlight & shadow
      const shimmer = (Math.sin(angle * 2 + 0.8) + 1) / 2; // 0 to 1
      const goldR = Math.round(158 + (225 - 158) * shimmer);
      const goldG = Math.round(123 + (195 - 123) * shimmer);
      const goldB = Math.round(52 + (130 - 52) * shimmer);

      out[outIdx] = goldR;
      out[outIdx + 1] = goldG;
      out[outIdx + 2] = goldB;
      out[outIdx + 3] = 255;
    } else if (dist <= 82.0) {
      // Smooth anti-aliased outer edge of the gold ring to transparent
      const alphaT = Math.max(0, 1 - (dist - 80.0) / 2.0);
      const angle = Math.atan2(dy, dx);
      const shimmer = (Math.sin(angle * 2 + 0.8) + 1) / 2;
      const goldR = Math.round(158 + (225 - 158) * shimmer);
      const goldG = Math.round(123 + (195 - 123) * shimmer);
      const goldB = Math.round(52 + (130 - 52) * shimmer);

      out[outIdx] = goldR;
      out[outIdx + 1] = goldG;
      out[outIdx + 2] = goldB;
      out[outIdx + 3] = Math.round(255 * alphaT);
    } else {
      // Transparent outside
      out[outIdx] = 0;
      out[outIdx + 1] = 0;
      out[outIdx + 2] = 0;
      out[outIdx + 3] = 0;
    }
  }
}

function encodePNG(width, height, rgbaBuffer) {
  const stride = width * 4 + 1;
  const filtered = Buffer.alloc(height * stride);
  for (let y = 0; y < height; y++) {
    filtered[y * stride] = 0;
    rgbaBuffer.copy(filtered, y * stride + 1, y * width * 4, (y + 1) * width * 4);
  }
  const compressed = zlib.deflateSync(filtered, { level: 9 });

  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    crcTable[n] = c;
  }
  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = data.length;
    const chunk = Buffer.alloc(12 + len);
    chunk.writeUInt32BE(len, 0);
    chunk.write(type, 4, 4, 'ascii');
    data.copy(chunk, 8);
    const typeAndData = chunk.slice(4, 8 + len);
    chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
    return chunk;
  }

  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

const pngOut = encodePNG(width, height, out);

// Save to public/images/mee-shine-logo.png and public/logo.png
if (!fs.existsSync('public/images')) fs.mkdirSync('public/images', { recursive: true });
fs.writeFileSync('public/images/mee-shine-logo.png', pngOut);
fs.writeFileSync('public/logo.png', pngOut);
console.log('Successfully saved public/images/mee-shine-logo.png and public/logo.png! Size:', pngOut.length);
