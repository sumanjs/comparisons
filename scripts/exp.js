var beautify = require('js-beautify').js_beautify;


console.log(beautify(`

    import suman = require('suman');
    const {Test} = suman.init(module);

    Test.create((b, it, before) => {

      it('bahru', t => {

      });

    });
    
`, {indent_size: 2}));
