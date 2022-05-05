import 'package:flutter/material.dart';
import 'package:helloworld/util/my_button.dart';
import 'package:helloworld/util/my_card.dart';
import 'package:helloworld/util/my_list_item.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  //page controller
  final _controller = PageController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[300],
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              // appbar
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 25.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: const [
                        Text(
                          'My ',
                          style: TextStyle(
                              fontSize: 28, fontWeight: FontWeight.bold),
                        ),
                        Text(
                          'Cards',
                          style: TextStyle(fontSize: 28),
                        ),
                      ],
                    ),

                    // plus button
                    Container(
                        padding: const EdgeInsets.all(4),
                        decoration: const BoxDecoration(
                            color: Colors.grey, shape: BoxShape.circle),
                        child: const Icon(Icons.add))
                  ],
                ),
              ),

              const SizedBox(height: 25),

              // cards

              Container(
                height: 180,
                child: PageView(
                  controller: _controller,
                  scrollDirection: Axis.horizontal,
                  children: [
                    MyCard(
                      expiryMonth: 08,
                      expiryYear: 2023,
                      color: Colors.deepPurple[400],
                      balance: 5259.20,
                      cardNumber: 12345678,
                    ),
                    MyCard(
                      expiryMonth: 10,
                      expiryYear: 2024,
                      color: Colors.blue[400],
                      balance: 235.77,
                      cardNumber: 3456789,
                    ),
                    MyCard(
                      expiryMonth: 07,
                      expiryYear: 2026,
                      color: Colors.orange[400],
                      balance: 1586.12,
                      cardNumber: 4856987,
                    )
                  ],
                ),
              ),

              const SizedBox(height: 25),

              SmoothPageIndicator(
                  controller: _controller,
                  count: 3,
                  effect: ExpandingDotsEffect(
                      activeDotColor: Colors.grey.shade700)),

              const SizedBox(height: 50),

              // 3 buttons -> send + pay + bills
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 25.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: const [
                    MyButton(
                        buttonText: 'Send',
                        iconImagePath: 'lib/icons/send-money.png'),
                    MyButton(
                        buttonText: 'Pay',
                        iconImagePath: 'lib/icons/credit-card.png'),
                    MyButton(
                        buttonText: 'Bill',
                        iconImagePath: 'lib/icons/bill.png'),
                  ],
                ),
              ),

              const SizedBox(height: 10),
              // columns -> stats + transacations

              Padding(
                  padding: const EdgeInsets.all(25.0),
                  child: Column(
                    children: const [
                      // Statistics
                      MyListItem(
                        iconImagePath: 'lib/icons/analysis.png',
                        titleName: 'Statistics',
                        titleSubname: 'Payment and Income',
                      ),

                      // Transactions
                      MyListItem(
                        iconImagePath: 'lib/icons/cash-flow.png',
                        titleName: 'Transactions',
                        titleSubname: 'Transactions History',
                      ),
                    ],
                  ))
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
          onPressed: () {},
          backgroundColor: Colors.pink,
          child: const Icon(Icons.monetization_on)),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      bottomNavigationBar: BottomAppBar(
        color: Colors.grey[200],
        child: Padding(
          padding: const EdgeInsets.only(top: 8.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              IconButton(
                  onPressed: () {},
                  icon: Icon(
                    Icons.home,
                    size: 32,
                    color: Colors.pink[200],
                  )),
              IconButton(
                  onPressed: () {},
                  icon: const Icon(
                    Icons.settings,
                    size: 32,
                  ))
            ],
          ),
        ),
      ),
    );
  }
}
