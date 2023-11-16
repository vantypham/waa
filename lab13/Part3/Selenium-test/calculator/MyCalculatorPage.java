package calculator;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MyCalculatorPage {
    private final WebDriver driver;


    public MyCalculatorPage(WebDriver driver) {
        this.driver = driver;
    }

    public void open(String url) {
        driver.get(url);
    }

    public void quit() {
        driver.quit();
    }


    @FindBy(name = "num1")
    private WebElement num1Input;
    @FindBy(name = "num2")
    private WebElement num2Input;
    @FindBy(name = "result")
    private WebElement resultElement;
    @FindBy(name = "btnAdd")
    private WebElement btnAdd;
    @FindBy(name = "btnSub")
    private WebElement btnSub;
    @FindBy(name = "btnMul")
    private WebElement btnMul;
    @FindBy(name = "btnClear")
    private WebElement btnClear;


    public void enterNumbers(String num1, String num2) {
        num1Input.sendKeys(num1);
        num2Input.sendKeys(num2);
    }

    public void clickAddButton() {
        btnAdd.click();
    }

    public void clickSubtractButton() {
        btnSub.click();
    }

    public void clickMultiplyButton() {
        btnMul.click();
    }

    public String getResult() {
        String s = resultElement.getText();
        return s;
    }


    public void clearData() {
        btnClear.click();
    }
}

