---
layout: post
title: Bitmapped Image 
tags:
  - image compression 
  - bit-mapped images
---
# Bit-mapped Images Introduction
* Also known as raster graphics
* They record a value for every pixel container in the image.
* They are often created from a external source such as a; scanner, digital camera.

# Resolution
## Device Resolution
* Printers and Scanners use dots per unit length, often dots per inch (DPI).
* Video, Monitors use pixel dimensions. The DPI depends on the physical size of the screen.

## Image Resolution
* An Array of pixels has pixel dimensions, but no physical dimensions.
* By default the the displayed size (physical dimension) depends on the resolution (DPI) of the output device.
  * physical dimension = pixel dimension / device resolution.
* The image resolution (PPI) can be stored in a image file to maintain the image's original size.

## Changing Resolution
If the image resolution < output device resolution, the displayer must interpolate extra pixels.
  * This always leads to a loss of quality.

If image resolution > output device resolution, the displayer must down sample (discard pixels).
  * Quality will often be better than that of a image  displayed at device resolution.
  * Image sampled at a higher resolution than that of the intended output device is oversampled.

# Compression
* Compression may be necessary when the network connection will not handle the size of the image data.
* The effectiveness of the compression will depend on the actual image data.

## Lossless compression
* It is always possible to decompress the compressed data and obtain an exact copy of the original uncompressed data.

### Run-length encoding (RLE)
Replace a run of consecutive pixels of the same color by a single copy of the color value and a count of the number of pixels in the run.

### Huffman coding
Assign codes of different lengths to the colors, so that the code for the frequent color was only a single bit long, 2 bit codes were used for the next most frequent colors and so on.
This achieved a reduction in image size in most images.

### Dictionary-based schema
#### LZ77, LZ78, LZW
* LZW is license free and used in GIF.

1. The method constructs a table or dictionary.
2. Long strings of bytes that are encountered in the input data is inserted into this.
3. All occurrences of these strings are then replaced by a pointer into the dictionary.

## Lossy compression
* Well suited to photographs with fine details and continuous tones.
* Consider image as a spatial caring signal that can be analyzed in the frequency domain.
* Hence high frequency information can be discarded without perceptible loss of quality.

### JPEG
1. Consists of DCT and quantization then encoding using a lossless compression algorithm.
2. Decompression decodes compression and uses IDCT

* Reconstructed image is an approximation to the original image.

### Discrete Cosine Transform (DCT)
* Similar to Fourier transformation, analyzes a single into its frequency components.
* Takes an array of pixel values, and produces an array of coefficients of the frequency components in the image.
* Computationally extensive process with time being proportional to the square of number of pixels.
* This does not reduce data size. The array of the data size is the same size of the array of pixels.

### Inverse Discrete Cosine Transform (IDCT)
* Takes data from frequency to spatial domain.

### Quantization
* This allows the information about the high frequency components to be identified and discarded.
* This then uses fewer bits to distinguish fewer different values for higher frequency components.
* The number of levels for each frequency coefficient may be specified separately in a a quantization matrix.
* After quantization, there will be many zero coefficients.

#Image Manipulation
* Many useful operations described by analogy with darkroom techniques for altering photos.
* Correct deficiencies in a image.
* Create artificial effects.
* Geometrical transformations.

## Selection
* No distinct object which is a contrast to vector graphics.
* Selection tools may allow for
  * Draw selection
  * Select regular shape
  * Select on basis of color / edges

## Masks
The area not selected is protected, as if masked by a stencil.

## Alpha Channels

## Pixel Piont Processing
* Compute a new value for pixel based from its old value.
* A mapping function, p' = f(p),f
* In grey scale images, this alters brightness and contrast.

## Pixel Group Processing
Computationally intensive process
1. Compute a new value for a pixel from its old value and the values of the surrounding pixels.
* useful for filtering

2. Compute the weighted average of pixel values.
* array of weights k/a convolution kernel.

### Blurring
#### Classic Simple blur
Convolution mask with equal weights.
* which produces a unnatural effect.

#### Gaussian blur
Convolution mask with coefficients falling off gradually (Gaussian bell curve).
* gentle blur where the amount of blur and the radius can be controlled.

### Sharpening
#### Low frequency filter
3x3 convolution mask coefficients are all equal to -1, except center which equals 9.
* Produces harsh edges

#### Unsharp masking
Copy the image and  apply Gaussian blur to copy, subtract it 2 time from the original.

# Geometrical Transformations
## Scaling, rotation, etc.
* Simple operations to perform on vector graphics.
* Requires each pixel to be transformed in bit-mapped images.
* Transformation may send pixels into gaps. Meaning interpolation is required.

# Interpolation
## Nearest Neighbor
Use value of a pixel whose center is closet in the original image to the real coordinates of an ideal interpolated pixel.

## Bilinear Interpolation
Use value of all four adjacent pixels, weighted by intersection with target pixel.

## Bi cubic Interpolation
Use values of all four adjacent pixels, weighted using cubic splines
