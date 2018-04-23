function countdown(seconds) {

    return new Promise( function (resolve, reject) {

        for( let i=seconds; i>=0; i-- ){

            setTimeout( function () {

                //Fake error
                if(i === 13){
                    return reject(
                        new Error('Fake error!!!')
                    );
                }

                if(i>0){
                    console.log('i', i + '...');
                }else{
                    resolve(console.log('__START__'));
                }

            }, (seconds - i)*1000 );

        }

    } );

}

countdown(16).then(

    function () {
        console.log('Success finish');
    },

    function (err) {
        console.log('Error occured in ' + err.message);
    }

);