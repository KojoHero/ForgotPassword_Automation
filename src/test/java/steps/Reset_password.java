package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Reset_password {

	WebDriver driver;
	  
	@Before()
	public void setup() {
		System.setProperty("webdriver.chrome.driver",
				"F:\\Community_Platform_TestScript\\Community_Platform\\src\\test\\java\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);

	}
	
	@After()
	public void end() {
	driver.manage().deleteAllCookies();
	driver.quit();
	}
	
	@Given("^User is on the reset password page$")
	public void user_is_on_the_reset_password_page() throws Throwable {
	    driver.get("http://192.168.2.106:3000/auth/login");
	    Thread.sleep(5000);
	    driver.findElement(By.xpath("//a[contains(text(),'Forgot Password?')]")).click();
	    driver.findElement(By.id("InputFindEmail")).sendKeys("bjim0100@gmail.com");
	    driver.findElement(By.xpath("//button[@id='findAccount_button']")).click();
	    driver.findElement(By.xpath("//body/div[@id='__next']/div[1]/div[1]/div[2]/div[2]/div[2]")).sendKeys("5645");
}

	@Given("^User enters new valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_new_valid_and(String password, String c_password) throws Throwable {
		driver.findElement(By.id("")).sendKeys(password);
		driver.findElement(By.id("")).sendKeys(c_password);
	}

	@When("^User taps on the continue button$")
	public void user_taps_on_the_continue_button() throws Throwable {
	    driver.findElement(By.id("")).click();
	}

	@Then("^User should be notified with a <\"([^\"]*)\"> based on credential used$")
	public void user_should_be_notified_with_a_based_on_credential_used(String notice) throws Throwable {
		String message =driver.findElement(By.id("")).getText();                                         
	  	Assert.assertEquals(message,notice);
	
	}

}
