package steps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class forgot_password {


	WebDriver driver;
	  
	@Before()
	public void setup() {
		System.setProperty("webdriver.chrome.driver",
				"F:\\Community_Platform_TestScript\\Community_Platform\\src\\test\\java\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);

	}
	
	@After()
	public void end() {
	driver.manage().deleteAllCookies();
	driver.quit();
	}

	@Given("^User browses to the login page$")
	public void user_browses_to_the_login_page() throws Throwable {
	    driver.get("http://20.52.44.20/auth/login");
	}

	@Given("^User clicks on forgot password$")
	public void user_clicks_on_forgot_password() throws Throwable {
	   driver.findElement(By.xpath("//a[contains(text(),'Forgot Password?')]")).click();
	}

	@When("^User enters his \"([^\"]*)\"$")
	public void user_enters_his(String email) throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.id("InputFindEmail")).sendKeys(email);
	}
	
	


	@When("^User clicks on continue$")
	public void user_clicks_on_continue() throws Throwable {
		driver.findElement(By.xpath("//button[@id='findAccount_button']")).click();
	}

	@Then("^user should be taken to the \"([^\"]*)\" page indicating success or told to repeat the process$")
	public void user_should_be_taken_to_the_page_indicating_success_or_told_to_repeat_the_process(String verification) throws Throwable {
		Thread.sleep(5000);
		String url = driver.getCurrentUrl();
		Assert.assertEquals(url,verification);
	}

}
