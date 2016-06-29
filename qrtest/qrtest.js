/* global Router */

if (Meteor.isClient) {
    Template.qrtest.onCreated(function() {
        this.val = new ReactiveVar("test");
    });
    
    Template.qrtest.helpers({
      val: function() {
        return Template.instance().val.get();
      }
    });
}

Router.myRoute('/qrtest', 'qrtest', 'QRテスト', 100, {
   data: function() {
      return {a: 1, b: 2};
   },
});