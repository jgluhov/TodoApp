/**
 * Created by jgluhov on 15.08.16.
 */
module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/js',
        filename: "bundle.js"
    },
    watch: true
};