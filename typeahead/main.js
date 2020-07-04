function myFunction() {
    let dropdown = document.getElementById('stateList');
    dropdown.selectedIndex = 0;

    const url = '../data/db.json';

    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.warn('Error! Status Code: ' +
                        response.status);
                    return;
                }

                response.json().then(function (data) {
                    let option;
                    let stateArray = [];

                    //fill stateArray with list of states from json file
                    for (let i = 0; i < data.length; i++) {
                        option = document.createElement('option');
                        option.text = data[i].name;
                        stateArray.push('<option value="' + option.text + '"></option>');
                    }

                    dropdown.innerHTML = stateArray;
                });
            }
        )
        .catch(function (err) {
            console.error('Error -', err);
        });
}