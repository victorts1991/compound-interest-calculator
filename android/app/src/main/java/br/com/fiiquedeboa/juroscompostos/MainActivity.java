package br.com.fiiquedeboa.juroscompostos;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);  // here
    super.onCreate(savedInstanceState);
  }
  @Override
  protected String getMainComponentName() {
    return "CompoundInterestCalculator";
  }
}
