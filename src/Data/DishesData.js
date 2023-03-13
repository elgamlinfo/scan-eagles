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
        details: "دجاج كرسبي-صلصه طماطم-فلفل اخضر-موتزاريلا-زيتون اسود"
    },{
        key: 13,
        titleEn: "dish 1",
        titleAr: "ميلانو",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1447477143-612x612.jpg?alt=media&token=3900639f-b713-4302-97a8-42129c817233",
        price: [{price: 65, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "chicken-pizza",
        details: "دجاج فاهيتا-طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 14,
        titleEn: "dish 1",
        titleAr: "باربكيو",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-489809469-612x612.jpg?alt=media&token=2023711a-74bf-4003-865b-c584eda59f68",
        price: [{price: 65, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "chicken-pizza",
        details: "صوص باربيكيو-فلفل اخضر-بصل-فراخ-موتزاريلا"
    },{
        key: 15,
        titleEn: "dish 1",
        titleAr: "سوبر تشكن رانش",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-530840065-612x612.jpg?alt=media&token=8ec98470-97c1-4fd5-997e-0fe00ae3634b",
        price: [{price: 65, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "chicken-pizza",
        details: "صلصه طماطم-موتزاريلا-فراخ-فلفل-صوص رانش"
    },{
        key: 16,
        titleEn: "dish 1",
        titleAr: "دجاج رانش",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-180817243-612x612.jpg?alt=media&token=35730f64-64f0-4aec-85d4-ef70523f30ac",
        price: [{price: 65, type: "صغير"},{price: 100, type: "وسط"},{price: 120, type: "كبير"}],
        category: "chicken-pizza",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 17,
        titleEn: "dish 1",
        titleAr: "بيف مدخن",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-537405083-612x612.jpg?alt=media&token=d9d6aba7-141a-48b2-b62d-b255261ed08e",
        price: [{price: 65, type: "صغير"},{price: 105, type: "وسط"},{price: 120, type: "كبير"}],
        category: "roquefort-lovers-pizza",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 18,
        titleEn: "dish 1",
        titleAr: "رومى مدخن",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-658661254-612x612.jpg?alt=media&token=6fcde015-276d-4330-bd6a-e3bd9af2b33c",
        price: [{price: 65, type: "صغير"},{price: 105, type: "وسط"},{price: 120, type: "كبير"}],
        category: "roquefort-lovers-pizza",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 19,
        titleEn: "dish 1",
        titleAr: "عشاق الريكفورد",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1458738217-612x612.jpg?alt=media&token=67486a9d-a5c5-4b35-9f42-dcc19072cd6a",
        price: [{price: 70, type: "صغير"},{price: 105, type: "وسط"},{price: 120, type: "كبير"}],
        category: "roquefort-lovers-pizza",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 20,
        titleEn: "dish 1",
        titleAr: "عشاق الجبنه",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1427212489-612x612.jpg?alt=media&token=bb7a3986-61f3-4709-bc55-0b6a9896833f",
        price: [{price: 60, type: "صغير"},{price: 100, type: "وسط"},{price: 115, type: "كبير"}],
        category: "special-pizza",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 21,
        titleEn: "dish 1",
        titleAr: "خضراوات",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1048400936-612x612.jpg?alt=media&token=4bf8f5a1-4cde-4553-9467-7d83490cbab7",
        price: [{price: 60, type: "صغير"},{price: 95, type: "وسط"},{price: 110, type: "كبير"}],
        category: "special-pizza",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 22,
        titleEn: "dish 1",
        titleAr: "مارجريتا",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-157507884-612x612.jpg?alt=media&token=4a3a3c5a-6de1-45ad-b951-26c84dc8b448",
        price: [{price: 50, type: "صغير"},{price: 90, type: "وسط"},{price: 110, type: "كبير"}],
        category: "special-pizza",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 23,
        titleEn: "dish 1",
        titleAr: "كريب خضار",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/inbound8436363738199734793.jpg?alt=media&token=61df7370-3bc4-4699-952a-b8f407c902b4",
        price: 40,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 24,
        titleEn: "dish 1",
        titleAr: "كريب سوبر كرسبي",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/for-web-1-15.jpg?alt=media&token=d33139e2-3042-4f6c-99b4-d3d0696731ba",
        price: 50,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 25,
        titleEn: "dish 1",
        titleAr: "كريب فاهيتا",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/Meat_Fajita_Crepe_637486816058436656.jpg?alt=media&token=7ca3269b-8389-488b-b12c-da795c53604a",
        price: 50,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 26,
        titleEn: "dish 1",
        titleAr: "كريب كرانشي",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/99.jpg?alt=media&token=9feea012-0624-4a1c-ac23-cde075ec5358",
        price: 50,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 27,
        titleEn: "dish 1",
        titleAr: "كريب شيش",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/a482a4ef-6e63-4840-88e0-bff5e3c8c5eb.jpg?alt=media&token=7730ab00-8158-416a-ae75-ad6ce746b0ac",
        price: 50,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 28,
        titleEn: "dish 1",
        titleAr: "كريب كرسبي",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/hqdefault.webp?alt=media&token=995eb2b7-0a72-40f4-8488-1f0d57ab0aa1",
        price: 50,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 29,
        titleEn: "dish 1",
        titleAr: "كريب بانيه",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/hqdefault.webp?alt=media&token=995eb2b7-0a72-40f4-8488-1f0d57ab0aa1",
        price: 50,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 30,
        titleEn: "dish 1",
        titleAr: "كريب استريبس",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/download%20(1).jfif?alt=media&token=1f114ff5-37aa-483b-aa63-36b0d9b7c861",
        price: 50,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 31,
        titleEn: "dish 1",
        titleAr: "كريب بطاطس",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/19529104401600177662.jpg?alt=media&token=d7c9b2be-19ce-4a07-be42-33522687376a",
        price: 35,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 32,
        titleEn: "dish 1",
        titleAr: "كريب سوسيس",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/43971551-v2_xlarge.jpg?alt=media&token=5aaf3676-3bf4-441a-8c29-d01518095e65",
        price: 45,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 33,
        titleEn: "dish 1",
        titleAr: "كريب ميكس جبن",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/2022-638014006105093137-509.jpg?alt=media&token=e499949e-9fd4-49ec-8691-16f51d550128",
        price: 45,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 34,
        titleEn: "dish 1",
        titleAr: "كريب سجق",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/Sausage-Crepe-550x550.jpg?alt=media&token=498a603a-a293-4699-938e-10ba1c4ebd3e",
        price: 45,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 35,
        titleEn: "dish 1",
        titleAr: "كريب برجر",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/d0213ee1-7bd5-46cf-8efc-c7e5c39d3506.jpg?alt=media&token=de684cae-7c26-4bdd-89f0-58d96572f360",
        price: 55,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 36,
        titleEn: "dish 1",
        titleAr: "كريب ميكس لحوم",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/5e579265-46aa-4233-ac32-f84b9cd529d2.jpg?alt=media&token=a37d3145-5df4-4cf7-b6e0-d28615cee372",
        price: 55,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 37,
        titleEn: "dish 1",
        titleAr: "كريب ميكس دجاج",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/mix_el_saada_crepe_637501443557252823.webp?alt=media&token=7808ab75-4059-4f14-ba24-a13cae325645",
        price: 55,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 38,
        titleEn: "dish 1",
        titleAr: "كريب شيكولاته",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/75db62f6d59024f5144271679e333cfcd9134c85.jpg?alt=media&token=e0213fbc-4e2b-441c-98bf-86e995891144",
        price: 45,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 39,
        titleEn: "dish 1",
        titleAr: "كريب شيكولاته وموز",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D8%A8-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B2-%D9%88%D8%A7%D9%84%D8%B4%D9%8A%D9%83%D9%88%D9%84%D8%A7%D8%AA%D8%A9.jpg?alt=media&token=a83fc4f1-6adf-4d11-8ffe-5f217685e968",
        price: 45,
        category: "crepe",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 40,
        titleEn: "dish 1",
        titleAr: "مكرونه جمبرى صوص ابيض",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1358831644-612x612.jpg?alt=media&token=ec936c5b-fb99-4da0-8de6-4a71364a7824",
        price: 75,
        category: "pasta",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 41,
        titleEn: "dish 1",
        titleAr: "مكرونه سي فود صوص",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-171375255-612x612.jpg?alt=media&token=7f91657d-ca93-49c8-ba21-92b63b6cb6e2",
        price: 85,
        category: "pasta",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 42,
        titleEn: "dish 1",
        titleAr: "مكرونه فراخ صوص ابيض",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-884287870-612x612.jpg?alt=media&token=6a5de5ca-aa5b-4a75-89c7-a1bcd9f97181",
        price: 70,
        category: "pasta",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 43,
        titleEn: "dish 1",
        titleAr: "مكرونه فراخ صوص احمر",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-523256382-612x612.jpg?alt=media&token=39f26066-2049-4357-908f-ec42a6bff025",
        price: 65,
        category: "pasta",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 44,
        titleEn: "dish 1",
        titleAr: "مكرونه هوت دوج احمر",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1313885171-612x612.jpg?alt=media&token=cd66f69d-c100-49d9-a0ef-da9585f416ea",
        price: 60,
        category: "pasta",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 45,
        titleEn: "dish 1",
        titleAr: "مكرونه سجق",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-461220507-612x612.jpg?alt=media&token=dfa320b8-e81b-42d3-b03f-54d14b36653f",
        price: 60,
        category: "pasta",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 46,
        titleEn: "dish 1",
        titleAr: "سكر ولبن",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/hqdefault.webp?alt=media&token=35532567-9aee-439d-9fa0-fbe0df72dc9d",
        price: 75,
        category: "sweet-pie",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 47,
        titleEn: "dish 1",
        titleAr: "قشطه ولبن",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/%D8%A7%D9%84%D9%81%D8%B7%D9%8A%D8%B1-%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A-%D8%A7%D9%84%D8%AD%D9%84%D9%88.jpg?alt=media&token=b077069e-571b-469f-af98-2a03a123d47a",
        price: 65,
        category: "sweet-pie",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 48,
        titleEn: "dish 1",
        titleAr: "شيكولاته",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/e57be5da-0d13-4433-a0db-4149ad12afd3.jpg?alt=media&token=71e63610-c7d7-4c76-8343-b46e4604900f",
        price: 70,
        category: "sweet-pie",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 49,
        titleEn: "dish 1",
        titleAr: "نوتيلا وموز",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/hqdefault.jpg?alt=media&token=27166ef1-e075-42ee-b027-1a87f7ef0277",
        price: 75,
        category: "sweet-pie",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 50,
        titleEn: "dish 1",
        titleAr: "نوتيلا ومكسرات",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/maxresdefault.jpg?alt=media&token=4c1259cf-0191-4533-88cc-a1effdce63af",
        price: 80,
        category: "sweet-pie",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 51,
        titleEn: "dish 1",
        titleAr: "بسبوسه",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/hqdefault%20(1).jpg?alt=media&token=3c8d34e5-83ee-4a63-9f34-83df6c549be7",
        price: 70,
        category: "sweet-pie",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 52,
        titleEn: "dish 1",
        titleAr: "كاسترد",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/maxresdefault%20(1).jpg?alt=media&token=036ce95b-9670-435f-adaf-60fd7b5e9157",
        price: 80,
        category: "sweet-pie",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 53,
        titleEn: "dish 1",
        titleAr: "قرفه",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/%D9%81%D8%B7%D9%8A%D8%B1%D8%A9-%D8%A7%D9%84%D9%82%D8%B1%D9%81%D8%A9-%D9%88%D8%A7%D9%84%D8%B3%D9%83%D8%B1.jpg?alt=media&token=923056aa-3b15-4f0a-87be-3013bcdc042e",
        price: 65,
        category: "sweet-pie",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 54,
        titleEn: "dish 1",
        titleAr: "مكسرات",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/hqdefault%20(2).jpg?alt=media&token=a5a81e96-68bf-4ca3-b832-287ab6698f1e",
        price: 80,
        category: "sweet-pie",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 55,
        titleEn: "dish 1",
        titleAr: "مكس شيكولاته",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/download.jfif?alt=media&token=e27f8fa8-6d11-437c-a207-4486464ff958",
        price: 70,
        category: "sweet-pie",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 56,
        titleEn: "dish 1",
        titleAr: "كاليزونى اللحوم الحاره",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1434669970-612x612.jpg?alt=media&token=1f2c45e3-4790-4f96-b83f-71341f8b7156",
        price: 45,
        category: "side-dishes",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 57,
        titleEn: "dish 1",
        titleAr: "كاليزونى البيبرونى",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-472068575-612x612.jpg?alt=media&token=5e473716-df55-46b5-9013-ba9ece7bc897",
        price: 45,
        category: "side-dishes",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 58,
        titleEn: "dish 1",
        titleAr: "كاليزونى دجاج",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/istockphoto-1190420565-612x612.jpg?alt=media&token=441d5240-7f40-4fba-8915-e4b8e551299f",
        price: 55,
        category: "side-dishes",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 59,
        titleEn: "dish 1",
        titleAr: "ستيكس بيبرونى",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/35554520-4f30-4986-8ed7-c73aefed26b0.jpg?alt=media&token=7fa32b75-379e-420a-8765-f261e2d099c8",
        price: 45,
        category: "side-dishes",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },{
        key: 60,
        titleEn: "dish 1",
        titleAr: "ستيكس عادى",
        image: "https://firebasestorage.googleapis.com/v0/b/eagles-resort.appspot.com/o/pizza_sticks_2.jpg?alt=media&token=0fab4818-9b3b-450f-a316-f1162ef16dc2",
        price: 40,
        category: "side-dishes",
        details: "فراخ-صلصه طماطم-فلفل اخضر-موتزاريلا-صوص رانش"
    },
]


export default DishesData