function calculateMoney(ticketSale) {
        const ticketPrice = 120;
        const staffCost = 8 * 50;
        const securityCost = 500;

        if (ticketSale < 0) {
                return 'Invalid Number ---- Please input any positive Number';
        }

        const totalRevenue = ticketSale * ticketPrice;
        const totalCost = staffCost + securityCost;
        const totalProfit = totalRevenue - totalCost;

        return totalProfit;
}

function checkName(name) {

        if (typeof name !== 'string') {
                return 'Invalid';
        }

        const lastLatter = name[name.length - 1].toLowerCase();

        if ('aeiouwy'.includes(lastLatter)) {
                return 'Good Name';
        }
        else {
                return 'Bad Name';
        }
}

function deleteInvalids(array) {
        if (!Array.isArray(array)) {
                return 'Invalid Array , please enter An array';
        }
        const onlyNumber = array.filter(item => typeof item === 'number' && !isNaN(item));
        return onlyNumber;
}

function password(obj) {

        const { name, birthYear, siteName } = obj;

        if (!/^\d{4}$/.test(birthYear)) {
                return 'Invalid';
        }

        if (!name || !birthYear || !siteName) {
                return 'Invalid';
        }

        const firstLatterSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
        const getPassword = `${firstLatterSiteName}#${name}@${birthYear}`;
        return getPassword;
}

function monthlySavings(arr, livingCost) {

        if (!Array.isArray(arr) || typeof livingCost !== 'number') {
                return 'Invalied input';
        }

        let totalSavings = 0;

        for (let i = 0; i < arr.length; i++) {
                let payment = arr[i];

                let tax = payment >= 3000 ? payment * 0.2 : 0;

                let monthlySaving = payment - tax;
              totalSavings += monthlySaving;      
        }

        totalSavings -= livingCost;

        if (totalSavings < 0) {
                return 'earn more';
        }

        return totalSavings;
}