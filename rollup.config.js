import pkg from './package.json';

let output = [];
output.push( {
    format: 'umd',
    name: 'Darkness',
    sourcemap: true,
    file: pkg.browser,
} );

if ( process.env.NODE_ENV === 'module' ) {

    output = [ {
        format: 'es',
        file: pkg.module,
    }, {
        format: 'cjs',
        file: pkg.main,
    } ];

}

export default {
    input: 'src/Darkness.js',
    output,
};
