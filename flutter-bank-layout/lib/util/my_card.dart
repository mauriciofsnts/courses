// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';

class MyCard extends StatelessWidget {
  final double balance;
  final int cardNumber;
  final int expiryMonth;
  final int expiryYear;
  final color;

  const MyCard(
      {Key? key,
      required this.balance,
      required this.cardNumber,
      required this.color,
      required this.expiryMonth,
      required this.expiryYear})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 25),
      child: Container(
        width: 300,
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
            color: color, borderRadius: BorderRadius.circular(16)),
        child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const SizedBox(height: 10),
              const Text(
                'Balance',
                style: TextStyle(color: Colors.white),
              ),
              const SizedBox(height: 10),
              Text(
                '\$' + balance.toString(),
                style: TextStyle(
                    color: Colors.white,
                    fontSize: 36,
                    fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 30),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  // card number
                  Text(cardNumber.toString(),
                      style: TextStyle(color: Colors.white)),
                  // card expiration date
                  Text(expiryMonth.toString() + '/' + expiryYear.toString(),
                      style: TextStyle(color: Colors.white)),
                ],
              )
            ]),
      ),
    );
  }
}
