---
layout: media
title: image types
tags:
  - image
  - file format
media:
  media/bmp.html:
    title: bmp image
    description: bmp bitmap image files of fish.
  media/png.html:
    title: png image
    description: Portable Network graphics image of fish.
  media/jpg.html:
    title: jpg image
    description: Jpeg image of fish, with extra data removed.
  media/gif.html:
    title: gif image
    description: Graphics Interchange image format of fish.
---

Image Types
==========================================================================

bmp
--------------------------------------------------------------------------
---
File Extenstion: .bmp .dib
Internet Media Type: image/bmp, image/x-bmp 
Type of Format: Raster graphics
Color:
Transparancy:
---

The bmp file type was created as a way to share files accross differnt
devices. The format is well documented and patent free, which can make it
a popular choice for vendors to use. The format does not use compression
which leads to larger files sizes. Scaling also does not perform well
since the image will be dependent on the pixel values themself.

png
--------------------------------------------------------------------------
---
File Extenstion: .png
Internet Media Type: image/png
Type of Format: Lossless bitmap
Color: Palettes of 24-bit RGB, non-plaette 32-bit RGBA, Greyscale
Transparancy: Alpha Channel
---

The format was created as a improved gif format for transfering files on
the internet. This format supports a larger color range than gif, up to
24-bits. The format does use compression but is meant to be lossless,
therefore the images may still be quite large. 

jpg
--------------------------------------------------------------------------
---
File Extenstion: .jpg, .jpeg, .jpe .jif, .jfif, .jfi
Internet Media Type: image/jpeg 
Type of Format: Lossy image format
Color:
Transparancy: Not supported
---

The format uses a lossy compression algorithm to shrink the file size. The
compression and format and desgined to remove image data not seen by the
human eye. Once this data is removed durning the compression process it
can not be recoverd. Unlike other image formats listed this format does
not support transaprency. Despite these attributes the format is widly
used and is a web standard.

gif
--------------------------------------------------------------------------
---
File Extenstion: .gif 
Internet Media Type: image/gif
Type of Format: Lossless bitmap
Color: 8-bit
Transparancy: 
---

The format supports 256 colors using 8-bit values. The format also
intrinsically supports animated images. When using animation each frame
can have a seperate color pattle. The format uses LZW lossless data
compression. Animation was added to the format by using the Graphic
Control Extenstion (GCE). This allows various images that are stored in
the same files to be painted to the screen with a time delay. The loop
count is not offically a part of the specification (GIF89a). The loop
count is thought widly used and supported.
