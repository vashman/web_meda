---
layout: about
title: About
---

Web Multimedia Demonstration
==========================================================================

Purpose
==========================================================================
To test how different types of browsers and multimedia interact. The
website will provide the users with an opportunity to compare and contrast
the content. It will also allow the users to test techniques used to
display the content easily.

Audience
==========================================================================
* Website Designers
* Browser Users
* Developers

Contents
==========================================================================
* Code Examples
* Code Demonstrations
* Embedded Media
* Code Descriptions
* Live data

Web Site Map
==========================================================================
```
            +--------------+              
            | Landing Page <------+       
            +------+-------+      |       
                   |              |       
                   |              |       
                   |              |       
+-----------+    +-v------+    +--v------+
| Analytics <----+  Home  +---->  About  |
+-----------+    +-+------+    +---------+
                   |                      
                   |     +-------------+  
                   +-----> Media Pages |  
                         +-------------+  
```

Figure 1.0: Site Relation diagram

The diagram illustrates the major pages and the navigation routes between
the pages. Note the Media pages are sub-pages of home and thus inherit the
navigation of the home page.

Note: The media pages themselves may have additional organize scheme the
user may use to navigate the site.

Page Layout
==========================================================================
This section will list pseudo-code showing the basic structure of the
different pages. The pages represent single topics and navigation points in
the site.

Landing
--------------------------------------------------------------------------
The Landing page is used to display information about the user and provide
information about how to use the web site.

```html
<banner: container>
<about: link>
<basic browser information: form>
<footer: container>
```

About
--------------------------------------------------------------------------
The about page is used to display legal, author and information not
pertaining to the site itself.

```html
<banner: container>
<landing: link>
<information: paragraph>
<footer: container>
```

Home
--------------------------------------------------------------------------
The home page is used to display the various different topics on the site
The page also is the main point of navigation for the site.

```html
<header: container>
<site menu: container>
<media menu: container>
<footer: container>
```

Analytics
--------------------------------------------------------------------------
This page is used to display live data that is collected by the client.

```html
<header: container>
<data: container>
<appendix: container>
<footer: container>
```

Media
--------------------------------------------------------------------------
These pages are used to display and demonstrate individual media types /
content.

```html
<header: container>
<media information: paragraph>
<media: container>
<media details: code>
<footer: container>
```

Section Layout
==========================================================================
The sections consist of web site parts or templates used in the above
skeleton.

## Header
```html
<banner>
<menu>
```

## Footer
```html
<copyright><author info>
<legal disclaimer>
```

## Media
```html
<media title>
<media description>
<media container>
  <media data>
<end media container>
```

## Appendix
```html
<term list container>
  <term><description>
<end term list container>
```

## Data
```html
<data title>
<data description>
<data formatter>
  <data>
<data formatter end>
```

## Site Menu
```html
<menu container>
  <menu>
<menu container end>
```

## Media Menu
```html
<menu container>
  <menu>
<menu container end>
```
