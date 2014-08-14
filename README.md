#adapt-xlearnlab-boxlinks

A  simple component to display a list of URL links with a label and a URL.

##Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/adaptlearning/adapt-cli), then from the command line run:-

        adapt install adapt-xlearnlab-boxlinks

##Usage

This is a very simple component with just title and body text elements.

##Settings overview

####_component

This value must be: `boxlinks`

####_classes

You can use this setting to add custom classes to your template and LESS file.

####_layout

This defines the position of the component in the block. Values can be `full`, `left` or `right`. 

####displayTitle and body

The `displayTitle` and `body` settings can be left blank. 

####_label and _URL

Use _label and _URL to add links with a label and a URL.

"_label": "lab.xlearnlab.net",
"_URL": "http://lab.xlearnlab.net"