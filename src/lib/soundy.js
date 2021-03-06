// Do not include this module directly as it has dependencies
var $builtinmodule = function() {
  var soundWrapper, mod, Sample;

  mod = {};

  // Dependency
  Sample = Sk.sysmodules.mp$subscript('sample').$d.Sample;

  soundWrapper = {
    stopPlaying: new Sk.builtin.func(function (sound) {
      Sk.ffi.checkArgs('stopPlaying', arguments, 1);
      sound._sound.stop();
    }),

    play : new Sk.builtin.func(function(sound) {
      Sk.ffi.checkArgs('play', arguments, 1);
      sound._sound.play();
    }),

    blockingPlay : new Sk.builtin.func(function(sound) {
      Sk.ffi.checkArgs('blockingPlay', arguments, 1);
      Sk.future(function (continueWith) {
        sound._sound.play(continueWith);
      });
    }),

    getDuration : new Sk.builtin.func(function(sound) {
      Sk.ffi.checkArgs('getDuration', arguments, 1);
      return new Sk.builtin.float_(sound._sound.getDuration());
    }),

    getNumSamples : new Sk.builtin.func(function(sound) {
      Sk.ffi.checkArgs('getNumSamples', arguments, 1);
      return new Sk.builtin.int_(sound._sound.getLength());
    }),

    getLength : new Sk.builtin.func(function(sound) {
      Sk.ffi.checkArgs('getLength', arguments, 1);
      return new Sk.builtin.int_(sound._sound.getLength());
    }),

    getSamplingRate : new Sk.builtin.func(function(sound) {
      Sk.ffi.checkArgs('getSamplingRate', arguments, 1);
      return new Sk.builtin.int_(sound._sound.getSamplingRate());
    }),

    setSampleValueAt : new Sk.builtin.func(function(sound, index, value) {
      var length;

      Sk.ffi.checkArgs('setSampleValueAt', arguments, 3);

      length = sound._sound.getLength();
      index = Sk.ffi.unwrapo(index);

      if(index < 0 || index >= length) {
        throw new Sk.builtin.ValueError('Index must have a value between 0 and ' + length);
      }

      if(!(value.skType && value.skType === 'int')) {
        throw new Sk.builtin.TypeError('Value must be an integer');
      }

      value = Sk.ffi.unwrapo(value);

      if(value < -32768) { value = -32768; }
      if(value > 32767) { value = 32767; }

      sound._sound.setLeftSample(index, pythy.Sound.map16BitIntToFloat(value));
    }),

    setLeftSample : new Sk.builtin.func(function(sound, index, value) {
      var length;

      Sk.ffi.checkArgs('setLeftSample', arguments, 3);

      length = sound._sound.getLength();
      index = Sk.ffi.unwrapo(index);

      if(index < 0 || index >= length) {
        throw new Sk.builtin.ValueError('Index must have a value between 0 and ' + length);
      }

      if(!(value.skType && value.skType === 'int')) {
        throw new Sk.builtin.TypeError('Value must be an integer');
      }

      value = Sk.ffi.unwrapo(value);

      if(value < -32768) { value = -32768; }
      if(value > 32767) { value = 32767; }

      sound._sound.setLeftSample(index, pythy.Sound.map16BitIntToFloat(value));
    }),

    setRightSample : new Sk.builtin.func(function(sound, index, value) {
      var length;

      Sk.ffi.checkArgs('setRightSample', arguments, 3);

      length = sound._sound.getLength();
      index = Sk.ffi.unwrapo(index);

      if(index < 0 || index >= length) {
        throw new Sk.builtin.ValueError('Index must have a value between 0 and ' + length);
      }

      if(!(value.skType && value.skType === 'int')) {
        throw new Sk.builtin.TypeError('Value must be an integer');
      }

      value = Sk.ffi.unwrapo(value);

      if(value < -32768) { value = -32768; }
      if(value > 32767) { value = 32767; }

      sound._sound.setRightSample(index, pythy.Sound.map16BitIntToFloat(value));
    }),

    getSampleValueAt : new Sk.builtin.func(function(sound, index) {
      var length;

      Sk.ffi.checkArgs('getSampleValueAt', arguments, 2);

      index = Sk.ffi.unwrapo(index);
      length = sound._sound.getLength();

      if(index < 0 || index >= length) {
        throw new Sk.builtin.ValueError('Index must have a value between 0 and ' + length);
      }

      return new Sk.builtin.int_(pythy.Sound.mapFloatTo16BitInt(sound._sound.getLeftSample(index)));
    }),

    getLeftSample : new Sk.builtin.func(function(sound, index) {
      var length;

      Sk.ffi.checkArgs('getLeftSample', arguments, 2);

      length = sound._sound.getLength();
      index = Sk.ffi.unwrapo(index);

      if(index < 0 || index >= length) {
        throw new Sk.builtin.ValueError('Index must have a value between 0 and ' + length);
      }

      return new Sk.builtin.int_(pythy.Sound.mapFloatTo16BitInt(sound._sound.getLeftSample(index)));
    }),

    getRightSample : new Sk.builtin.func(function(sound, index) {
      var length;

      Sk.ffi.checkArgs('getRightSample', arguments, 2);

      length = sound._sound.getLength();
      index = Sk.ffi.unwrapo(index);

      if(index < 0 || index >= length) {
        throw new Sk.builtin.ValueError('Index must have a value between 0 and ' + length);
      }

      return new Sk.builtin.int_(pythy.Sound.mapFloatTo16BitInt(sound._sound.getRightSample(index)));
    }),

    getSampleObjectAt : new Sk.builtin.func(function (sound, index) {
      var length;

      Sk.ffi.checkArgs('getSampleObjectAt', arguments, 2);

      length = sound._sound.getLength();
      index = Sk.ffi.unwrapo(index);

      if(index < 0 || index >= length) {
        throw new Sk.builtin.ValueError('Index must have a value between 0 and ' + length);
      }

      return Sk.misceval.callsim(Sample, sound, index);
    }) ,

    getSamples : new Sk.builtin.func(function (sound) {
      var samples, len;

      Sk.ffi.checkArgs('getSamples', arguments, 1);

      samples = [];
      len = sound._sound.getLength();

      for(var i = 0; i < len; i++) {
        samples.push(Sk.misceval.callsim(Sample, sound, i));
      }

      return new Sk.builtin.list(samples);
     })
  };

  mod.Sound = Sk.misceval.buildClass(mod, function ($gbl, $loc) {
    var onError;

    onError = function (continueWith) {
      return function (errorMsg) {
        if(errorMsg.indexOf('File') !== -1) {
          continueWith(new Sk.builtin.ValueError(errorMsg + '. Is the URL incorrect?'));
        } else {
          continueWith(new Sk.builtin.ValueError(errorMsg));
        }
      }
    };

    $loc.__init__ = new Sk.builtin.func(function (sound) {
      var arg0, res, arg1, arg2;

      Sk.ffi.checkArgs('__init__', arguments, [2, 3]);

      arg0 = arguments[1];

      if(arg0 instanceof Sk.builtin.str) {
        arg0 = Sk.ffi.unwrapo(arg0); //url
        res = Sk.future(function (continueWith) {
          new window.pythy.Sound(continueWith, onError(continueWith), arg0);
        });
      } else if(arg0.tp$name === 'Sound') {
        res = Sk.future(function (continueWith) {
          new window.pythy.Sound(continueWith, onError(continueWith), arg0._sound);
        });
      } else {
        arg1 = Sk.ffi.unwrapo(arguments[1]); //numSamples
        arg2 = Sk.ffi.unwrapo(arguments[2]); //samplingRate
        res = Sk.future(function (continueWith) {
          new window.pythy.Sound(continueWith, onError(continueWith), arg1, arg2);
        });
      }

      if(res instanceof window.pythy.Sound) {
        sound._sound = res;
      } else if(res) {
        throw res;
      }
    });

    $loc.__str__ = new Sk.builtin.func(function(sound) {
      var str;

      Sk.ffi.checkArgs('__str__', arguments, 1);

      str = 'Sound, ';

      if(sound._sound.url) {
        str += 'File: ' + sound._sound.url + ', ';
      }

      return new Sk.builtin.str(str + 'Number of samples: ' + sound._sound.getLength());
    });

    $loc.__repr__ = new Sk.builtin.func(function(sound) {
      var str;

      Sk.ffi.checkArgs('__repr__', arguments, 1);

      str = 'Sound, ';

      if(sound._sound.url) {
        str += 'File: ' + sound._sound.url + ', ';
      }

      return new Sk.builtin.str(str + 'Number of samples: ' + sound._sound.getLength());
    });

    $loc.duplicate = new Sk.builtin.func(function (sound) {
      Sk.ffi.checkArgs('duplicate', arguments, 1);
      return Sk.misceval.callsim(mod.Sound, sound);
    });

    goog.object.extend($loc, soundWrapper);

  }, 'Sound', []);

  goog.object.extend(mod, soundWrapper);

  goog.object.extend(mod, {
    duplicateSound: new Sk.builtin.func(function (sound) {
      Sk.ffi.checkArgs('duplicateSound', arguments, 1);
      return Sk.misceval.callsim(mod.Sound, sound);
    }),

    makeSound: new Sk.builtin.func(function (url) {
      Sk.ffi.checkArgs('makeSound', arguments, 1);
      return Sk.misceval.callsim(mod.Sound, url);
    }),

    makeEmptySound: new Sk.builtin.func(function (numSamples, samplingRate) {
      Sk.ffi.checkArgs('makeEmptySound', arguments, [1, 2]);
      return Sk.misceval.callsim(mod.Sound, numSamples, samplingRate);
    }),

    makeEmptySoundBySeconds: new Sk.builtin.func(function (seconds, samplingRate) {
      var numSamples;

      Sk.ffi.checkArgs('makeEmptySoundBySeconds', arguments, [1, 2]);

      if(Sk.ffi.unwrapo(seconds) < 0) {
        throw new Sk.builtin.ValueError('Duration can not be negative');
      }
      numSamples = Sk.ffi.unwrapo(seconds) * (Sk.ffi.unwrapo(samplingRate) || window.pythy.Sound.SAMPLE_RATE);
      return Sk.misceval.callsim(mod.Sound, new Sk.builtin.int_(numSamples), samplingRate);
    }),

    openSoundTool: new Sk.builtin.func(function (sound) {
      Sk.ffi.checkArgs('openSoundTool', arguments, 1);
      window.pythy.soundTool.start(sound._sound);
    }),

    writeSoundTo : new Sk.builtin.func(function(sound, path) {
      Sk.ffi.checkArgs('writeSoundTo', arguments, 2);
      result = Sk.future(function (continueWith) {
        sound._sound.save(Sk.ffi.unwrapo(path), continueWith);
      });
      if(result && result.errors && result.errors.length) {
        throw new Sk.builtin.ValueError(result.errors[0].file[0]);
      }
    })
  });

  return mod;
};
