/* global Router */

if (Meteor.isClient) {
    Template.qrtest.onCreated(function() {
        this.val = new ReactiveVar("test test !! test");
    });
    Template.qrtest.onRendered(function() {
        console.log("OKwww");
        $('#qrcode').empty().qrcode({text: this.val.get(), size:256});
    });
    Template.qrtest.helpers({
        val: function() {
            return Template.instance().val.get();
        },
    });
    Template.qrtest.events({
        "keyup #qrtext": function(event) {
            var val = $('#qrtext').val();
            event.preventDefault();
            //console.log("keyup! <" + val + ">");
            Template.instance().val.set(val);
            $('#qrcode').empty().qrcode({text: val, size:128});
        },
    });
}

Router.myRoute('/qrtest', 'qrtest', 'QRテスト', 100, {
});