package com.example.microsearch;

import android.media.Image;
import android.os.Bundle;
import android.app.ListActivity;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;


public class Flujograma extends ListActivity{
    String[] flujogramas = {
            "Identificacion de Enterobacter",
            "Bacilo no fermentador",
            "Genero Vibrio de Interes Clinico",
            "Bacilos gramnegativos Oxidasa Positivo",
            "Aeromonas",
            "Campylobacter"

    };


    @Override
    public  void onCreate (Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        ListView lstView = getListView();
        lstView.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE_MODAL);
        lstView.setTextFilterEnabled(true);

        setListAdapter(new ArrayAdapter<String>(this,android.R.layout.simple_expandable_list_item_1,flujogramas));
    }

    public void onListItemClick (
            ListView parent, View v, int position, long id){
        Toast.makeText(this,"Flujograma de  "+ flujogramas[position],
                Toast.LENGTH_LONG).show();
    }
}