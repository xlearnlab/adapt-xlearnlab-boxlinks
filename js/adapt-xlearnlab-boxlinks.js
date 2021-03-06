/*
* adapt-xlearnlab-boxlinks
* License - https://github.com/xlearnlab/adapt-xlearnlab-boxlinks/blob/master/LICENSE
* Maintainers - Oliver Pincus <oliver.pincus@xlearnlab.net>
*/
define(function(require) {
  var ComponentView = require('coreViews/componentView');
  var Adapt = require('coreJS/adapt');

  var Boxlinks = ComponentView.extend({

    postRender: function() {
      this.setReadyStatus();
      this.$('.component-inner').on('inview', _.bind(this.inview, this));
    },

    inview: function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            if (visiblePartY === 'top') {
                this._isVisibleTop = true;
            } else if (visiblePartY === 'bottom') {
                this._isVisibleBottom = true;
            } else {
                this._isVisibleTop = true;
                this._isVisibleBottom = true;
            }

            if (this._isVisibleTop && this._isVisibleBottom) {
                this.$('.component-inner').off('inview');
                this.setCompletionStatus();
            }
            
        }
    }

  });

  Adapt.register("boxlinks", Boxlinks);

});
