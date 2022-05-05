import 'package:flutter/material.dart';
import 'package:helloworld/homepage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
          primaryColor: const Color(0xFF7159C1),
          visualDensity: VisualDensity.adaptivePlatformDensity),
      home: const HomePage(),
    );
  }
}