/* global Router */
Router.myRoute('/test', 'test', 'テスト', 1000, {
   data: function() {
      var val = "";
      Router.myRoutes.find().forEach(function(doc) {
         val += '"'+doc.path+'","'+doc.name+'","'+doc.desc+'",'+doc.order+"\n\r";
      });
      for (var i = 0 ; i <5 ; i++) {
         val += val+"\r\n";
      }
      // var valSjis = iconv(val, 'Shift_JIS').toString();
      var valSjis = val;
      console.log("val = <" + val + ">.")
      return {a: 1, b: 2, val: val, valSjis: valSjis};
   },
});