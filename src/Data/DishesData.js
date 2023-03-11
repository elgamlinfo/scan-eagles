const DishesData = [
    {
        key: 1,
        titleEn: "dish 1",
        titleAr: "الفورنو سوبريم",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/pexels-eneida-nieves-905847.jpg?alt=media&token=6ec2e6c8-97cb-409c-8c34-e87ad772b1a1",
        price:  [{price: 60, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "meat-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 2,
        titleEn: "dish 1",
        titleAr: "بابريكا اللحوم الحارة",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1290330077-612x612.jpg?alt=media&token=6b571726-a90f-4623-8641-ba684ec2f3d3",
        price: [{price: 60, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "meat-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 3,
        titleEn: "dish 1",
        titleAr: "بيبرونى",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-521403691-612x612.jpg?alt=media&token=16cc81bb-bb29-4dad-8c87-4c183a0cb655",
        price: [{price: 60, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "meat-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 4,
        titleEn: "dish 1",
        titleAr: "هوت دوج",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-938742222-612x612.jpg?alt=media&token=12667441-11c7-4f1d-84d7-8724292310f5",
        price: [{price: 60, type: "صغير"},{price: 95, type: "وسط"},{price: 115, type: "كبير"}],
        category: "meat-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 5,
        titleEn: "dish 1",
        titleAr: "بسطرمة",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1349383878-612x612.jpg?alt=media&token=a6bbc792-73de-40ec-a11a-c7c51dcd4c35",
        price: [{price: 60, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "meat-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 6,
        titleEn: "dish 1",
        titleAr: "سجق",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-835271096-612x612.jpg?alt=media&token=9b730e3d-55a7-4b86-b3f7-20c63dca4100",
        price: [{price: 60, type: "صغير"},{price: 95, type: "وسط"},{price: 115, type: "كبير"}],
        category: "meat-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 7,
        titleEn: "dish 1",
        titleAr: "فواكه البحر",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1097993868-612x612.jpg?alt=media&token=a934e355-71a2-41a1-9979-ce7848480690",
        price: [{price: 75, type: "صغير"},{price: 105, type: "وسط"},{price: 130, type: "كبير"}],
        category: "seafood-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 8,
        titleEn: "dish 1",
        titleAr: "جمبرى",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-155388738-612x612.jpg?alt=media&token=a3b085d9-6870-4f71-832e-dff74de0a835",
        price: [{price: 70, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "seafood-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 9,
        titleEn: "dish 1",
        titleAr: "تونه",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1366624442-612x612.jpg?alt=media&token=b80b991e-b4bb-4f36-9e0f-7e84aa67c253",
        price: [{price: 60, type: "صغير"},{price: 95, type: "وسط"},{price: 115, type: "كبير"}],
        category: "seafood-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 10,
        titleEn: "dish 1",
        titleAr: "انشوجه",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1213497118-612x612.jpg?alt=media&token=90172257-0cb3-4b44-a08c-30c4d6022753",
        price: [{price: 60, type: "صغير"},{price: 95, type: "وسط"},{price: 115, type: "كبير"}],
        category: "seafood-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 11,
        titleEn: "dish 1",
        titleAr: "فواكه البحر سي رانش",
        image: "  https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1308029368-612x612.jpg?alt=media&token=60eabd5c-861f-4e5a-8670-57bb9560014d",
        price: [{price: 75, type: "صغير"},{price: 110, type: "وسط"},{price: 140, type: "كبير"}],
        category: "seafood-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },,{
        key: 12,
        titleEn: "dish 1",
        titleAr: "تشكن كرسبي",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1221262925-612x612.jpg?alt=media&token=edf7f76e-dd07-497a-a113-ddac1bb0c4ad",
        price: [{price: 65, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "chicken-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 13,
        titleEn: "dish 1",
        titleAr: "ميلانو",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-155388738-612x612.jpg?alt=media&token=a3b085d9-6870-4f71-832e-dff74de0a835",
        price: [{price: 65, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "chicken-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 14,
        titleEn: "dish 1",
        titleAr: "باربكيو",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-530840065-612x612.jpg?alt=media&token=8ec98470-97c1-4fd5-997e-0fe00ae3634b",
        price: [{price: 65, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "chicken-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 15,
        titleEn: "dish 1",
        titleAr: "سوبر تشكن رانش",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-530840065-612x612.jpg?alt=media&token=8ec98470-97c1-4fd5-997e-0fe00ae3634b",
        price: [{price: 65, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "chicken-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },{
        key: 16,
        titleEn: "dish 1",
        titleAr: "دجاج رانش",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-180817243-612x612.jpg?alt=media&token=35730f64-64f0-4aec-85d4-ef70523f30ac",
        price: [{price: 65, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "chicken-pizza",
        details: "دجاج, لحم, تركى مدخن, بيكن, زيتون , فلفل , صوص السوبريم"
    },
]


export default DishesData