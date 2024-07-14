function selectMode(mode) {
    const header = document.getElementById('header');
    const formContainer = document.getElementById('form-container');
    
    switch(mode) {
        case 'otaa':
            header.innerText = 'Iotnet CSV Generator OTAA режим';
            formContainer.innerHTML = `
                <select id="city" onchange="updateRoutingProfiles(this.value)">
                    <option selected disabled>Выберите город</option>
                    <option value="5332d6ed-1670-4786-9490-9b2d397726b1">Павлодар</option>
                    <option value="c0849eea-a22c-42e4-bf55-52bc43a7a6b0">Алматы</option>
                    <option value="59a34a89-17ac-48a0-b782-71e1a796d448">Астана</option>
                    <option value="afb34e33-9d41-4d5f-a61e-16de1e582933">Актобе</option>
                    <option value="c50adb90-4c7e-47a8-8a0b-6d5827ef7a51">Костанай</option>
                    <option value="4ec50cba-fcb0-48c7-b031-dc8c0a935400">Талдыкорган</option>
                    <option value="495d15dd-ff6a-441a-b6d5-4cca797ce057">Атырау</option>
                    <option value="07ea325a-ea7d-4db8-8fe1-6daa9df94364">Кызылорда</option>
                    <option value="fef36f32-6990-4dca-8cf8-2443d7e66a21">Шымкент</option>
                    <option value="6c2f7775-f7c4-406f-a16c-b501646785cf">Петропавлск</option>
                    <option value="59f2f23f-565d-4a9b-b29d-ba91402e7982">Тараз</option>
                    <option value="7938d0fd-731f-4425-beba-ec290c249307">Актау</option>
                </select>
                <select id="routingProfile" disabled>
                    <option selected disabled>Выберите As routing profile</option>
                </select>
                <textarea id="devEUI" placeholder="Введите DevEUI (каждый на новой строке)"></textarea>
                <textarea id="appKey" placeholder="Введите AppKey (каждый на новой строке)"></textarea>
                <input id="description" placeholder="Введите описание">
                <button onclick="generateCsv('otaa')">Сгенерировать CSV</button>
            `;
            break;
        case 'abp':
            header.innerText = 'Iotnet CSV Generator ABP режим';
            formContainer.innerHTML = `
                <select id="city" onchange="updateRoutingProfiles(this.value)">
                    <option selected disabled>Выберите город</option>
                    <option value="5332d6ed-1670-4786-9490-9b2d397726b1">Павлодар</option>
                    <option value="c0849eea-a22c-42e4-bf55-52bc43a7a6b0">Алматы</option>
                    <option value="59a34a89-17ac-48a0-b782-71e1a796d448">Астана</option>
                    <option value="afb34e33-9d41-4d5f-a61e-16de1e582933">Актобе</option>
                    <option value="c50adb90-4c7e-47a8-8a0b-6d5827ef7a51">Костанай</option>
                    <option value="4ec50cba-fcb0-48c7-b031-dc8c0a935400">Талдыкорган</option>
                    <option value="495d15dd-ff6a-441a-b6d5-4cca797ce057">Атырау</option>
                    <option value="07ea325a-ea7d-4db8-8fe1-6daa9df94364">Кызылорда</option>
                    <option value="fef36f32-6990-4dca-8cf8-2443d7e66a21">Шымкент</option>
                    <option value="6c2f7775-f7c4-406f-a16c-b501646785cf">Петропавлск</option>
                    <option value="59f2f23f-565d-4a9b-b29d-ba91402e7982">Тараз</option>
                    <option value="7938d0fd-731f-4425-beba-ec290c249307">Актау</option>
                    <option value="f1ea6c1a-61fa-4a0e-9b2f-77184a3f38ff">Смарт ферма</option>
                </select>
                <select id="routingProfile" disabled>
                    <option selected disabled>Выберите As routing profile</option>
                </select>
                <textarea id="devEUI" placeholder="Введите DevEUI (каждый на новой строке)"></textarea>
                <textarea id="devAddr" placeholder="Введите Device Address (каждый на новой строке)"></textarea>
                <textarea id="nwkSKey" placeholder="Введите Network Session Key (каждый на новой строке)"></textarea>
                <textarea id="appSKey" placeholder="Введите Application Session Key (каждый на новой строке)"></textarea>
                <input id="description" placeholder="Введите описание">
                <button onclick="generateCsv('abp')">Сгенерировать CSV</button>
            `;
            break;
        case 'delete':
            header.innerText = 'Iotnet CSV Generator режим удаления';
            formContainer.innerHTML = `
                <textarea id="devEUI" placeholder="Введите DevEUI (каждый на новой строке)"></textarea>
                <button onclick="generateCsv('delete')">Сгенерировать CSV</button>
            `;
            break;
        case 'instruction':
            header.innerText = 'Iotnet CSV Generator Инструкция';
            formContainer.innerHTML = `
                Здесь будет распологаться инструкция
            `;
            break;
    }
}

function updateRoutingProfiles(city) {
    const routingProfileSelect = document.getElementById('routingProfile');
    routingProfileSelect.innerHTML = '<option selected disabled>Выберите As routing profile</option>';

    if (city) {
        routingProfileSelect.disabled = false; // Разрешаем выбирать As routing profile
        switch (city) {
            case 'c50adb90-4c7e-47a8-8a0b-6d5827ef7a51': // Костанай
                routingProfileSelect.innerHTML += `
                    <option value="11">Kostanay_BK_Stroy</option>
                    <option value="26">Kostanay_Decast</option>
                `;
                break;
            case '5332d6ed-1670-4786-9490-9b2d397726b1': // Павлодар
                routingProfileSelect.innerHTML += `
                    <option value="7">Pavlodar_ERC</option>
                `;
                break;
            case 'c0849eea-a22c-42e4-bf55-52bc43a7a6b0': // Алматы
                routingProfileSelect.innerHTML += `
                    <option value="8">Алматы Водоканал</option>
                `;
                break;
            case '59a34a89-17ac-48a0-b782-71e1a796d448': // Астана
                routingProfileSelect.innerHTML += `
                    <option value="9">BI-Group</option>
                `;
                break;
            case 'afb34e33-9d41-4d5f-a61e-16de1e582933': // Актобе
                routingProfileSelect.innerHTML += `
                    <option value="10">Aktobe_Su_Energy_Group</option>
                `;
                break;
            case '4ec50cba-fcb0-48c7-b031-dc8c0a935400': // Талдыкорган
                routingProfileSelect.innerHTML += `
                    <option value="12">Taldykorgan_Zhetesu_Vodokanal</option>
                    <option value="25">Taldykorgan_Teplo</option>
                `;
                break;
            case '495d15dd-ff6a-441a-b6d5-4cca797ce057': // Атырау
                routingProfileSelect.innerHTML += `
                    <option value="13">Atyrau_Greentech</option>
                `;
                break;
            case '07ea325a-ea7d-4db8-8fe1-6daa9df94364': // Кызылорда
                routingProfileSelect.innerHTML += `
                    <option value="14">Kyzylorda_Greentech</option>
                `;
                break;
            case 'fef36f32-6990-4dca-8cf8-2443d7e66a21': // Шымкент
                routingProfileSelect.innerHTML += `
                    <option value="15">Shymkent_Energo_Modul</option>
                `;
                break;
            case '6c2f7775-f7c4-406f-a16c-b501646785cf': // Петропавлск
                routingProfileSelect.innerHTML += `
                    <option value="16">Petropavlovsk_Kyzylzhar_Su</option>
                `;
                break;
            case '59f2f23f-565d-4a9b-b29d-ba91402e7982': // Тараз
                routingProfileSelect.innerHTML += `
                    <option value="17">Taraz_Su</option>
                `;
                break;
            case '7938d0fd-731f-4425-beba-ec290c249307': // Актау
                routingProfileSelect.innerHTML += `
                    <option value="20">IP_Ayzakov</option>
                    <option value="22">ТОО Caspian Service Kazakhstan</option>
                `;
                break;
            default:
                routingProfileSelect.innerHTML = '<option selected disabled>Выберите As routing profile</option>';
                routingProfileSelect.disabled = true; // Запрещаем выбирать As routing profile
                break;
        }
    } else {
        routingProfileSelect.innerHTML = '<option selected disabled>Выберите As routing profile</option>';
        routingProfileSelect.disabled = true; // Запрещаем выбирать As routing profile
    }
}

function generateCsv(mode) {
    const devEUI = document.getElementById('devEUI').value.split('\n').map(e => e.trim()).filter(e => e);
    const description = document.getElementById('description') ? document.getElementById('description').value.trim() : '';
    const city = document.getElementById('city') ? document.getElementById('city').value : '';
    const routingProfile = document.getElementById('routingProfile') ? document.getElementById('routingProfile').value : '';

    let csvContent = '';
    let fileName = '';

    if (mode === 'otaa') {
        const appKey = document.getElementById('appKey').value.split('\n').map(e => e.trim()).filter(e => e);
        if (devEUI.length !== appKey.length) {
            alert('Количество DevEUI и AppKey должно быть одинаковым.');
            return;
        }
        csvContent = "CMD,DevEUI,DevAddr,DeviceProfileID,LoRaWAN JoinEUI/AppEUI,LoRaWAN AppKey,ServiceProfileID,AS Routing Profile ID,Description,Admin info\n";
        for (let i = 0; i < devEUI.length; i++) {
            csvContent += `CREATE_OTAA,${devEUI[i]},,5332d6ed-1670-4786-9490-9b2d397726b1,,${appKey[i]},${city || ''},${routingProfile},${devEUI[i]}_${description || ''},\n`;
        }
        fileName = 'otaa_devices.csv';
    } else if (mode === 'abp') {
        const devAddr = document.getElementById('devAddr').value.split('\n').map(e => e.trim()).filter(e => e);
        const nwkSKey = document.getElementById('nwkSKey').value.split('\n').map(e => e.trim()).filter(e => e);
        const appSKey = document.getElementById('appSKey').value.split('\n').map(e => e.trim()).filter(e => e);
        if (devEUI.length !== devAddr.length || devEUI.length !== nwkSKey.length || devEUI.length !== appSKey.length) {
            alert('Количество DevEUI, Device Address, Network Session Key и Application Session Key должно быть одинаковым.');
            return;
        }
        csvContent = "CMD,DevEUI,DevAddr,DeviceProfileID,NWKSKEY,APPSKEY,ServiceProfileID,AS Routing Profile ID,Description,Admin info\n";
        for (let i = 0; i < devEUI.length; i++) {
            csvContent += `CREATE_ABP,${devEUI[i]},${devAddr[i] || ''},66959415-a00c-4e30-b695-34d1429f8103,${nwkSKey[i] || ''},${appSKey[i] || ''},${city || ''},${routingProfile},${devEUI[i]}_${description || ''},,\n`;
        }
        fileName = 'abp_devices.csv';
    } else if (mode === 'delete') {
        csvContent = "CMD,DevEUI\n";
        for (let i = 0; i < devEUI.length; i++) {
            csvContent += `DELETE,${devEUI[i]}\n`;
        }
        fileName = 'delete_devices.csv';
    }

    downloadCsv(csvContent, fileName);
}

function downloadCsv(csvContent, fileName) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}