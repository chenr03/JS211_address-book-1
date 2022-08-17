const axios = require('axios').default;
const assert = require('assert')

const getAddress = () => {
// Make a request for a user with a given ID
    axios.get('https://randomuser.me/api/?results=5')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log('You are an absolute, moron!' ,error);
        })
        .then((address) => (contactArray = address.results));
            // always executed
            console.log(address.results)
        };

// Tests
if (typeof describe === 'function') {
    describe('getAddress()', () => {
        it('should return 5 random addresses on the contact card', () => {
            getAddress()
            assert.equal(address.results.length, 5);
        });
        it('should register if the address is outside of the range of the request', () => {
            getAddress()
            assert.equal((address.results.length) > 5) ;
        });
    });

    describe('getAddress()', () => {
        it('should display error if fetch does not work', () => {
            getAddress()
            assert.equal(address.error);
        });
    });

}




