exports.addToTemplate = (templates, args) => {
    let t = {}
    t[args[0]] = g({}, args)
    return Object.assign(t, templates)
}

function g(o, args) {
    let object = Object.assign({}, o)['name', 'repository', 'description'].map(function(a, i) {
        object[a] = args[i]
    })
    return object
}
