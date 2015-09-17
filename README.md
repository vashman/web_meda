Web Multi-Media Demostration
==========================================================================

Purpose
==========================================================================
To test how different types fo browswers and mult-media interact. The
website will provide the users with an opptinutiy to compare and contrast
the content. It will also allow the users to test tequinies used to
display the content easilty.

Audidence
==========================================================================
* Website Desginers
* Browser Users
* Developers

Contents
==========================================================================
* Code Exmaples
* Code Demostrations
* Embeded Media
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

The diagram illistraties the major pages and the navigation routes between
the pages. Note the Media pages are sub-pages of home and thus inhert the
navigation of the home page.

Note: The media pages themsevels may have additonal organize schems the
user may use to navigate the site.

Page Layout
==========================================================================
This section will list pesudo code showing the basic structure of the
differnt pages. The pages represent single topics and navigation points in
the site.

Landing
--------------------------------------------------------------------------
The Landing page is used to display information about the user and provide
information about how to use the web site.

```
<banner: contianer>
<about: link>
<basic browser infromation: form>
<footer: container>
```

About
--------------------------------------------------------------------------
The about page is used to display legal, author and infomration not
pretaining to the site itself.

```
<banner: container>
<landing: link>
<information: paragraph>
<footer: container>
```

Home
--------------------------------------------------------------------------
The home page is used to display the various differnt topics on the site.
The page also is the main point of navigation for the site.

```
<header: contianer>
<site menu: container>
<media menu: container>
<footer: container>
```

Analutics
--------------------------------------------------------------------------
This page is used to display live data that is collected by the client.

```
<header: container>
<data: container>
<appendex: contianer>
<footer: container>
```

Media
--------------------------------------------------------------------------
These pages are used to display and demostrate indiviual media types / 
content.

```
<header: container>
<media information: paragrah>
<media: contianer>
<media details: code>
<footer: container>
```

Section Layout
==========================================================================
The sections consite of web site parts or templates used in the above
skeletopn.

Header
--------------------------------------------------------------------------
```
<banner>
<menu>
```

Footer
--------------------------------------------------------------------------
```
<copyright><author info>
<legal discalimer>
```

Media
--------------------------------------------------------------------------
```
<media title>
<media descriiption>
<media container>
  <media data>
<end media container>
```

Appendex
--------------------------------------------------------------------------
```
<term list container>
  <term><description>
<end term list contianer>
```

Data
--------------------------------------------------------------------------
```
<data title>
<data description>
<data formatter>
  <data>
<data formatter end>
```

Site Menu
--------------------------------------------------------------------------
```
<menu container>
  <menu>
<menu container end>
```

Media Menu
--------------------------------------------------------------------------
```
<menu container>
  <menu>
<menu container end>
```
