package com.example.microsearch;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.Toast;

public class Busqueda extends AppCompatActivity implements AdapterView.OnItemSelectedListener{
    String[] resultado = {"Sin Prueba","Positivo", "Negativo"};


    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.busqueda);

        Spinner spin = (Spinner) findViewById(R.id.acido);
        spin.setOnItemSelectedListener(this);

        Spinner spin2 = (Spinner) findViewById(R.id.indol);
        spin2.setOnItemSelectedListener(this);

        Spinner spin3 = (Spinner) findViewById(R.id.acManitol);
        spin3.setOnItemSelectedListener(this);

        Spinner spin4 = (Spinner) findViewById(R.id.acnicotinico);
        spin4.setOnItemSelectedListener(this);

        Spinner spin5 = (Spinner) findViewById(R.id.adc);
        spin5.setOnItemSelectedListener(this);

        Spinner spin6 = (Spinner) findViewById(R.id.adnasa);
        spin6.setOnItemSelectedListener(this);

        Spinner spin7 = (Spinner) findViewById(R.id.arabinosa);
        spin7.setOnItemSelectedListener(this);

        Spinner spin8 = (Spinner) findViewById(R.id.citrato);
        spin8.setOnItemSelectedListener(this);

        Spinner spin9 = (Spinner) findViewById(R.id.complejoB);
        spin9.setOnItemSelectedListener(this);

        Spinner spin10 = (Spinner) findViewById(R.id.crecimiento25);
        spin10.setOnItemSelectedListener(this);

        Spinner spin11 = (Spinner) findViewById(R.id.crecimientoNaCl);
        spin11.setOnItemSelectedListener(this);

        Spinner spin12 = (Spinner) findViewById(R.id.fermentadorGlucosa);
        spin12.setOnItemSelectedListener(this);

        Spinner spin13 = (Spinner) findViewById(R.id.fermentadorManitol);
        spin13.setOnItemSelectedListener(this);

        Spinner spin14 = (Spinner) findViewById(R.id.fermentadorSacarosa);
        spin14.setOnItemSelectedListener(this);

        Spinner spin15 = (Spinner) findViewById(R.id.gas);
        spin15.setOnItemSelectedListener(this);

        Spinner spin16 = (Spinner) findViewById(R.id.gasDeGlucosa);
        spin16.setOnItemSelectedListener(this);

        Spinner spin17 = (Spinner) findViewById(R.id.hidrolisisHipurato);
        spin17.setOnItemSelectedListener(this);

        Spinner spin18 = (Spinner) findViewById(R.id.indolNaCL);
        spin18.setOnItemSelectedListener(this);

        Spinner spin19 = (Spinner) findViewById(R.id.inositol);
        spin19.setOnItemSelectedListener(this);

        Spinner spin20 = (Spinner) findViewById(R.id.invasor);
        spin20.setOnItemSelectedListener(this);

        Spinner spin21 = (Spinner) findViewById(R.id.ldc);
        spin21.setOnItemSelectedListener(this);

        Spinner spin22 = (Spinner) findViewById(R.id.Lisina);
        spin22.setOnItemSelectedListener(this);

        Spinner spin23 = (Spinner) findViewById(R.id.lisinaDex);
        spin23.setOnItemSelectedListener(this);

        Spinner spin24 = (Spinner) findViewById(R.id.mcconkey);
        spin24.setOnItemSelectedListener(this);

        Spinner spin25 = (Spinner) findViewById(R.id.metionina);
        spin25.setOnItemSelectedListener(this);

        Spinner spin26 = (Spinner) findViewById(R.id.movilidad);
        spin26.setOnItemSelectedListener(this);

        Spinner spin27 = (Spinner) findViewById(R.id.onpg);
        spin27.setOnItemSelectedListener(this);

        Spinner spin28 = (Spinner) findViewById(R.id.ornitina);
        spin28.setOnItemSelectedListener(this);

        Spinner spin29 = (Spinner) findViewById(R.id.oxidasa);
        spin29.setOnItemSelectedListener(this);

        Spinner spin30 = (Spinner) findViewById(R.id.produccionSH);
        spin30.setOnItemSelectedListener(this);

        Spinner spin31 = (Spinner) findViewById(R.id.ramnosa);
        spin31.setOnItemSelectedListener(this);

        Spinner spin32 = (Spinner) findViewById(R.id.reduccionNitrato);
        spin32.setOnItemSelectedListener(this);

        Spinner spin33 = (Spinner) findViewById(R.id.requrimientoDeSal);
        spin33.setOnItemSelectedListener(this);

        Spinner spin34 = (Spinner) findViewById(R.id.sensibilidad);
        spin34.setOnItemSelectedListener(this);

        Spinner spin35 = (Spinner) findViewById(R.id.sensibilidadAmpicilina);
        spin35.setOnItemSelectedListener(this);

        Spinner spin36 = (Spinner) findViewById(R.id.sensibilidadCefalotina);
        spin36.setOnItemSelectedListener(this);

        Spinner spin37 = (Spinner) findViewById(R.id.sensibilidadNalitixico);
        spin37.setOnItemSelectedListener(this);

        Spinner spin38 = (Spinner) findViewById(R.id.sorbitol);
        spin38.setOnItemSelectedListener(this);

        Spinner spin39 = (Spinner) findViewById(R.id.spLactosa);
        spin39.setOnItemSelectedListener(this);

        Spinner spin40 = (Spinner) findViewById(R.id.suerot);
        spin40.setOnItemSelectedListener(this);

        Spinner spin41 = (Spinner) findViewById(R.id.urea);
        spin41.setOnItemSelectedListener(this);

        Spinner spin42 = (Spinner) findViewById(R.id.ornitinaDex);
        spin42.setOnItemSelectedListener(this);

        ArrayAdapter aa =new ArrayAdapter(this,android.R.layout.simple_spinner_item,resultado);
        aa.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spin.setAdapter(aa);
        spin2.setAdapter(aa);
        spin3.setAdapter(aa);
        spin4.setAdapter(aa);
        spin5.setAdapter(aa);
        spin6.setAdapter(aa);
        spin7.setAdapter(aa);
        spin8.setAdapter(aa);
        spin9.setAdapter(aa);
        spin10.setAdapter(aa);
        spin11.setAdapter(aa);
        spin12.setAdapter(aa);
        spin13.setAdapter(aa);
        spin14.setAdapter(aa);
        spin15.setAdapter(aa);
        spin16.setAdapter(aa);
        spin17.setAdapter(aa);
        spin18.setAdapter(aa);
        spin19.setAdapter(aa);
        spin20.setAdapter(aa);
        spin21.setAdapter(aa);
        spin22.setAdapter(aa);
        spin23.setAdapter(aa);
        spin24.setAdapter(aa);
        spin25.setAdapter(aa);
        spin26.setAdapter(aa);
        spin27.setAdapter(aa);
        spin28.setAdapter(aa);
        spin29.setAdapter(aa);
        spin30.setAdapter(aa);
        spin31.setAdapter(aa);
        spin32.setAdapter(aa);
        spin33.setAdapter(aa);
        spin34.setAdapter(aa);
        spin35.setAdapter(aa);
        spin36.setAdapter(aa);
        spin37.setAdapter(aa);
        spin38.setAdapter(aa);
        spin39.setAdapter(aa);
        spin40.setAdapter(aa);
        spin41.setAdapter(aa);
        spin42.setAdapter(aa);

    }

    @Override
    public void onItemSelected(AdapterView<?> arg0, View arg1, int position, long id) {
        Toast.makeText(getApplicationContext(),resultado[position],Toast.LENGTH_LONG).show();

    }

    @Override
    public void onNothingSelected(AdapterView<?> arg0) {

    }
}
