angular-focus-on-click
======================

This module aims to make clicking on elements behaviour similar across browsers.

For example, clicking on an `a` tag in Firefox will focus on that tag, whereas Chrome will not focus unless `tabindex="#"` has been set.

Enable the module:


Then use the directive on any container you wish.  All clicks will bubble up to he container.

```
<body ng-app="youApp">
  <div id="site" focus-on-click>
    ...
  </div>
</body>
```
