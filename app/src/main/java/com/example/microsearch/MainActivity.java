package com.example.microsearch;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.content.Intent;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);
    }

    public void onClick (View view){
        startActivity(new Intent("com.example.microsearch.Busqueda"));
    }

    public void onClick2 (View view){
        startActivity(new Intent("com.example.microsearch.Flujograma"));
    }

    public void onClick3 (View view){
        startActivity(new Intent("com.example.microsearch.Informacion"));
    }


}
