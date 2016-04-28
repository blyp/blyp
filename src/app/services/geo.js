app.factory('geo', function ($window, $cookies) {

    var service = 'geo';
    var factory = {};

    factory.get = function() {

        if ( ! $window.navigator.geolocation) {
            console.log('Geolocation not supported.');
        } else {
            $window.navigator.geolocation.getCurrentPosition(
                function (position) {
                    factory.set(position.coords);
                    return factory.cookie();
                },
                function (err) {
                    console.log(err);
                });
        }

        return factory.cookie();
    };

    factory.set = function(data) {

        console.log(data);
        console.log(_.isEmpty(data));
        
        if ( ! _.isEmpty(data)) {

            var coords = {
                latitude : data.latitude,
                longitude : data.longitude,
                accuracy : data.accuracy
            };

            console.log(coords);

            $cookies.put('_location.blyp.com.br', JSON.stringify(coords));

            if (factory.check())
                return true;

            return false;
        }

        return false;
    };

    factory.check = function() {

        if ( ! factory.cookie())
            return false;

        return true;
    };

    factory.cookie = function() {
        return $cookies.get('_location.blyp.com.br');
    };

    return factory;

});