import 'package:flutter/material.dart';

class MyListItem extends StatelessWidget {
  final String iconImagePath;
  final String titleName;
  final String titleSubname;

  const MyListItem(
      {Key? key,
      required this.iconImagePath,
      required this.titleName,
      required this.titleSubname})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 20.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // icon
          Container(
            height: 80,
            decoration: BoxDecoration(
                color: Colors.grey[100],
                borderRadius: BorderRadius.circular(12)),
            padding: const EdgeInsets.all(12),
            child: Image.asset(iconImagePath),
          ),

          Row(
            children: [
              const SizedBox(
                height: 12,
              ),
              Column(
                children: [
                  Text(
                    titleName,
                    style: const TextStyle(
                        fontWeight: FontWeight.bold, fontSize: 20),
                  ),
                  const SizedBox(
                    height: 12,
                  ),
                  Text(
                    titleSubname,
                    style: TextStyle(fontSize: 16, color: Colors.grey[600]),
                  ),
                ],
              ),
            ],
          ),

          const Icon(Icons.arrow_forward_ios),
        ],
      ),
    );
  }
}
