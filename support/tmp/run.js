
var input = read('test/unit/test_unpack.py');
print('test/unit/test_unpack.py');
Sk.configure({syspath:["test/unit"], read:read, python3:false, debugging: false});
Sk.misceval.asyncToPromise(function() {
    return Sk.importMain("test_unpack", false, true);
}).then(function () {}, function(e) {
    print("UNCAUGHT EXCEPTION: " + e);
    print(e.stack);
    quit(1);
});
        