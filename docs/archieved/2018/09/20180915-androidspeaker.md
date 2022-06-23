---
title: Android 朗读字符串
date: 2018-09-15 18:44:22
lang: zh-Hans
tags:
    - 安卓 Android
    - TextToSpeech
categories: 
    - 开发 Development
    - 安卓 Android
---

## 背景

在开发一些Handsfree的安卓应用的时候，常常需要系统自动朗读一些字符串，例如“System activated”等等。
本文通过使用android.speech.tts.TextToSpeech来实现这个功能。

## 参考资料
- [Register Application class in Manifest?](https://stackoverflow.com/questions/2929562/register-application-class-in-manifest)
- [TextToSpeech : deprecated speak function in API Level 21](https://stackoverflow.com/questions/30706780/texttospeech-deprecated-speak-function-in-api-level-21)


## 让Android朗读文字
我们创建一个类Speaker.java来实现朗读功能：

```Java
package net.liaocy.smartcar.biz;

import android.app.Application;
import android.speech.tts.TextToSpeech;
import android.util.Log;

import java.util.LinkedList;
import java.util.Locale;
import java.util.Queue;

public class Speaker{

    private TextToSpeech speech;
    private final String TAG = "Speaker";

    public Speaker(Application context){
        super();
        //init speech
        this.speech = new TextToSpeech(context, new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {
                // TODO Auto-generated method stub
                if (status == TextToSpeech.SUCCESS) {
                    int result = speech.setLanguage(Locale.ENGLISH);
                    if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                        Log.e(TAG, "Not support this language.");
                    } else {
                        Log.i(TAG, "Speaker activated!");
                    }
                }
            }
        });
        //init speech -- end
    }

    // 在前文朗读完之后，朗读text中的内容
    public void Speak(String text){
        this.speech.speak(text, TextToSpeech.QUEUE_ADD, null, null);
    }
    
    // 即使前文没有朗读完，也强制朗读text中的内容
    public void SpeakNow(String text){
        this.speech.speak(text, TextToSpeech.QUEUE_FLUSH, null, null);
    }

}
```
源代码：[点击这里](https://github.com/liaocyintl/SmartCar/blob/master/app/src/main/java/net/liaocy/smartcar/biz/Speaker.java)

## 将Speaker作为全局变量加入Application

我们将Speaker作为全局变量加入Application，可以在APP的任何位置调用朗读方法。

我们首先创建一个AppContext.java，这是自定义个Application类：

```Java
package net.liaocy.smartcar;

import android.app.Application;

import net.liaocy.smartcar.biz.Speaker;


public class AppContext extends Application {
    private static AppContext instance;

    private Speaker speaker;

    //取得朗读器对象
    public Speaker getSpeaker(){
        return this.speaker;
    }

    //在任何地方都可以取得这个类的实例
    public static AppContext getInstance() {
        return instance;
    }

    @Override
    public void onCreate() {
        // TODO Auto-generated method stub
        super.onCreate();
        instance = this;

        //init and start speaker
        speaker = new Speaker(this);
        speaker.Speak("System activated");
        //init and start speaker -- end
    }
}

```
源代码：[点击这里](https://github.com/liaocyintl/SmartCar/blob/master/app/src/main/java/net/liaocy/smartcar/AppContext.java)

将自定义Application注册到AndroidManifest.xml：
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="net.liaocy.smartcar">

    <application
        android:name=".AppContext"
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <activity android:name=".activity.Dashboard">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
```

这里的"android:name"要和注册类名称相同，用来声明注册类。
源代码：[点击这里](https://github.com/liaocyintl/SmartCar/blob/master/app/src/main/AndroidManifest.xml)

## 在Activity测试朗读

```Java
this.btnSpeak = this.findViewById(R.id.btnSpeak);
this.btnSpeak.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Log.i(TAG, "speak");

        appContext.getSpeaker().Speak("System Activated.");

        txtMsg.setText("here");
    }
});

```

源代码：[点击这里](https://github.com/liaocyintl/SmartCar/blob/master/app/src/main/java/net/liaocy/smartcar/activity/Dashboard.java)

## 感想

我是想做一个车载的安卓应用，集成导航，OBD车况检测，传感器数据手机和在线分析等一系列功能。有兴趣的朋友欢迎一起讨论。
代码库：[https://github.com/liaocyintl/SmartCar](https://github.com/liaocyintl/SmartCar)


