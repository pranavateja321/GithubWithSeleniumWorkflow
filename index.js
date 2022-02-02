
const { Builder, By, until, } = require("selenium-webdriver");


const driver = new Builder().forBrowser("firefox").build();


async function credentialslogin() {
    try {

        var username = "simhadripranavateja";

        var repository = "Pranavrepository";

        await driver.get("https://github.com/login");

        await driver.findElement(By.name("login")).sendKeys(username);

        await driver.findElement(By.name("password")).sendKeys("automationtesting");

        await driver.findElement(By.name("commit")).click();

        await sleep(3000);

        await driver.findElement(By.xpath("/html/body/div[4]/div/aside/div[2]/div[1]/div/div/a[1]")).click();

        await driver.findElement(By.name("repository[name]")).sendKeys("Pranavrepository");

        await driver.findElement(By.name("repository[description]")).sendKeys("My first repository");

        await sleep(2000);

        driver.findElement(By.className("btn-primary btn")).click();

        await sleep(3000);

        driver.findElement(By.id("settings-tab")).click();

        await sleep(2000);


        driver.findElement(By.xpath("/html/body/div[4]/div/main/div[2]/div/div/div[2]/div/div[10]/ul/li[4]/details/summary")).click();

        await sleep(2000);

        driver.findElement(By.xpath("/html/body/div[4]/div/main/div[2]/div/div/div[2]/div/div[10]/ul/li[4]/details/details-dialog/div[3]/form/p/input")).sendKeys(username + "/" + repository);

        await sleep(2000);

        driver.findElement(By.xpath("/html/body/div[4]/div/main/div[2]/div/div/div[2]/div/div[10]/ul/li[4]/details/details-dialog/div[3]/form/button")).click();

    } catch (error) {
        console.log(error);
    }
}

function sleep(ms) {
    
    return new Promise(resolve => setTimeout(resolve, ms));
}


credentialslogin();