Web Multi-Media Demostration
==========================================================================

Purpose
==========================================================================
To test how different types fo browswers and mult-media interact.

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

Page Layout
==========================================================================
This section will list pesudo code showing the basic structure of the
differnt pages. The pages represent single topics and navigation points in
the site.

Landing
--------------------------------------------------------------------------
```
<banner: contianer>
<about: link>
<basic browser infromation: form>
<footer: container>
```

About
--------------------------------------------------------------------------
```
<banner: container>
<landing: link>
<information: content>
<footer: container>
```

Home
--------------------------------------------------------------------------
```
<header: contianer>
<media menu: container>
<footer: container>
```

Analutics
--------------------------------------------------------------------------
```
<header: container>
<footer: container>
```

Media
--------------------------------------------------------------------------
```
<header: container>
<footer: container>
```

Section Layout
==========================================================================
The sections consite of web site parts or

Header
--------------------------------------------------------------------------
```
<banner>
<menu>
```

Footer
--------------------------------------------------------------------------
```

```
