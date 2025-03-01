import fetchMock from 'fetch-mock';

fetchMock.get('https://maps.vnpost.vn/apps/covid19/api/patientapi/list', {
    "code": "SUCCESS",
    "message": "Đã thực thi thành công",
    "data": [{
        "name": "BN-22",
        "address": "Điện Máy Xanh, phường Bình Hiên, Quận Hải Châu, Thành phố Đà Nẵng",
        "lat": 16.060648,
        "lng": 108.222513,
        "patientGroup": "F0",
        "note": "Từ 18h49p ngày 4/3/2020 đến 19h ngày 4/3/2020: Mua sim điện thoại",
        "verifyDate": "2020-03-08T00:00:00"
    }, {
        "name": "BN-23",
        "address": "Điện Máy Xanh, Phường Bình Hiên, Quận Hải Châu, Thành phố Đà Nẵng",
        "lat": 16.060648,
        "lng": 108.223513,
        "patientGroup": "F0",
        "note": "Từ 18h49p ngày 4/3/2020 đến 19h ngày 4/3/2020: Mua sim điện thoại",
        "verifyDate": "2020-03-08T00:00:00"
    }, {
        "name": "BN-21",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 2h30p ngày 2/3/2020 đến 3h15p ngày 2/3/2020: di chuyển từ sân bay về nhà riêng",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-21",
        "address": "Khách sạn Daewoo, 360 Kim Mã",
        "lat": 21.030931,
        "lng": 105.811726,
        "patientGroup": "F0",
        "note": "Từ 12h15p ngày 4/3/2020 đến 14h ngày 4/3/2020: Đi họp",
        "verifyDate": "2020-03-03T00:00:00"
    }, {
        "name": "BN-23",
        "address": "Sân bay Quốc tế Nội Bài",
        "lat": 21.218809,
        "lng": 105.804127,
        "patientGroup": "F0",
        "note": "Từ 5h20p ngày 2/3/2020 đến 5h40p ngày 2/3/2020: Hạ cánh ở sân bay Nội Bài",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-20",
        "address": " Tiệm thuốc ở phố Châu Long, 59 Châu Long, Quán Thánh, Ba Đình, Hà Nội",
        "lat": 21.043622,
        "lng": 105.84213,
        "patientGroup": "F0",
        "note": "Từ 9h ngày 5/3/2020 đến 10h ngày 5/3/2020: Mua thuốc cho cháu (NB17)",
        "verifyDate": "2020-03-03T00:00:00"
    }, {
        "name": "BN-20",
        "address": "Bệnh viện Đa khoa quốc tế Hồng Ngọc, 55 Yên Ninh",
        "lat": 21.04252,
        "lng": 105.844066,
        "patientGroup": "F0",
        "note": "Từ 15h ngày 5/3/2020 đến 22h ngày 5/3/2020: Đưa cháu gái (NB17) đi khám chữa bệnh",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-21",
        "address": "Quán ăn số 3 Hàng Bún",
        "lat": 21.041861,
        "lng": 105.845183,
        "patientGroup": "F0",
        "note": "Từ 12h ngày 6/3/2020 đến 13h30p ngày 6/3/2020: ăn trưa cùng đồng nghiệp",
        "verifyDate": "2020-03-06T00:00:00"
    }, {
        "name": "BN-23",
        "address": "Sân bay Quốc tế Đà Nẵng",
        "lat": 16.055922,
        "lng": 108.199907,
        "patientGroup": "F0",
        "note": "Hạ cánh sân bay Đà Nẵng trên chuyến bay VN183",
        "verifyDate": "2020-03-04T00:00:00"
    }, {
        "name": "BN-17",
        "address": "Bệnh viện Đa khoa quốc tế Hồng Ngọc, 55 Yên Ninh",
        "lat": 21.042473,
        "lng": 105.844116,
        "patientGroup": "F0",
        "note": "Từ 14h ngày 05/03/2020 đến 15h ngày 05/03/2020:\r\nĐi khám bệnh",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-19",
        "address": "Tiệm thuốc ở phố Châu Long",
        "lat": 21.043622,
        "lng": 105.84213,
        "patientGroup": "F0",
        "note": null,
        "verifyDate": "2020-03-06T00:00:00"
    }, {
        "name": "BN-22",
        "address": "Sân bay Nội Bài",
        "lat": 21.218809,
        "lng": 105.804126,
        "patientGroup": "F0",
        "note": "Từ 11h10p ngày 1/3/2020 đến 11h30p ngày 1/3/2020: Tới sân bay Nội Bài",
        "verifyDate": "2020-03-01T00:00:00"
    }, {
        "name": "BN-22",
        "address": "Sân bay quốc tế Đà Nẵng",
        "lat": 16.055922,
        "lng": 108.199907,
        "patientGroup": "F0",
        "note": "Từ 10h20p ngày 04/03/2020 đến 10h40p ngày 04/03/2020: Tới sân bay quốc tế Đà Nẵng",
        "verifyDate": "2020-03-04T00:00:00"
    }, {
        "name": "BN-24",
        "address": "Sân bay Nội Bài",
        "lat": 21.21881,
        "lng": 105.804128,
        "patientGroup": "F0",
        "note": null,
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-24",
        "address": "Đi du lịch Ninh Bình",
        "lat": 20.216611,
        "lng": 105.937606,
        "patientGroup": "F0",
        "note": "Từ 9h ngày 5/3/2020 đến 22h ngày 5/3/2020: Đi du lịch Ninh Bình",
        "verifyDate": "2020-03-04T00:00:00"
    }, {
        "name": "BN-24",
        "address": "Đi du lịch Hạ Long, Quảng Ninh",
        "lat": 20.947777,
        "lng": 107.026398,
        "patientGroup": "F0",
        "note": "Từ 6/3/2020 đến 8/3/2020: Đi du lịch Hạ Long, Quảng Ninh",
        "verifyDate": "2020-03-06T00:00:00"
    }, {
        "name": "BN-25",
        "address": "Sân bay Nội Bài",
        "lat": 21.21881,
        "lng": 105.804128,
        "patientGroup": "F0",
        "note": "Từ 5h20p ngày 2/3/2020 đến 5h40p ngàu 2/3/2020: Ở sân bay Nội Bài",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-26",
        "address": "Sân bay quốc tế Nội Bài",
        "lat": 21.218441,
        "lng": 105.804415,
        "patientGroup": "F0",
        "note": "Từ 5h20p ngày 1/3/2020 đến 5h40p ngày 2/3/2020: Ở sân bay Nội Bài",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-25",
        "address": "Hà Nội",
        "lat": 21.030385,
        "lng": 105.851085,
        "patientGroup": "F0",
        "note": "Ở Hà Nội từ 2/3/2020 5h20' đến 4/3/2020 23h59' đi tham quan du lịch",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-26",
        "address": "Hạ Long, Quảng Ninh",
        "lat": 20.953138,
        "lng": 107.058736,
        "patientGroup": "F0",
        "note": "5/3/2020 di chuyển về Hạ Long - tàu du lịch QN 5228 ngày 5-7/3/2020 - 8/3 trở về đất liên và đưa đi cách ly",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-27",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.218145,
        "lng": 105.804546,
        "patientGroup": "F0",
        "note": "1/từ 3/2020 11:10:00 đến 2/3/2020 5:20:00 London Heathrow Airport, Luân Đôn, Anh Quốc - Máy bay VN0054",
        "verifyDate": "0001-01-01T00:00:00"
    }, {
        "name": "BN-25",
        "address": "Hạ Long, Quảng Ninh",
        "lat": 20.94817,
        "lng": 107.028542,
        "patientGroup": "F0",
        "note": "5/3/2020 di chuyển về Hạ Long - tàu du lịch QN 5228 ngày 5-7/3/2020 - 8/3 trở về đất liên và đưa đi cách ly",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-27",
        "address": "Khách sạn Wyndham Hạ Long",
        "lat": 20.959441,
        "lng": 107.060272,
        "patientGroup": "F0",
        "note": "Từ 2/3/2020 5:20:00 đến 2/3/2020 9:30:00 di chuyển Sân bay quốc tế Nội Bài, Hà Nội\r\nXe taxi 14A.20033 đến Khách sạn Wyndham Hạ Long",
        "verifyDate": "0001-01-01T00:00:00"
    }, {
        "name": "BN-28",
        "address": "Sân bay Nội Bài",
        "lat": 21.218441,
        "lng": 105.804415,
        "patientGroup": "F0",
        "note": "Đi từ London Heathrow Airport 1/3/2020 11h10' đến Sân bay Quốc tế Nội Bài 2/3/2020 05h20'",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-29",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.218745,
        "lng": 105.802465,
        "patientGroup": "F0",
        "note": "từ 1/3/2020 11:10:00 đến 2/3/2020 5:20:00 London Heathrow Airport, Luân Đôn, Anh Quốc - Máy bay VN0054",
        "verifyDate": "0001-01-01T00:00:00"
    }, {
        "name": "BN-28",
        "address": "Khách sạn La Siesta, 94 Mã Mây, Hoàn Kiếm, Hà Nội",
        "lat": 21.034231,
        "lng": 105.853388,
        "patientGroup": "F0",
        "note": "Từ 2/3/2020 lúc 5h20' đến 4/3/2020 lúc 22h đi tham quan du lịch ở Hà Nội",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-29",
        "address": "khách sạn La Siesta, 94 Mã Mây, Hoàn Kiếm, Hà Nội",
        "lat": 21.034204,
        "lng": 105.853264,
        "patientGroup": "F0",
        "note": "từ 2/3/2020 5:20:00 đến 4/3/2020 22:00:00 nghỉ tại khách sạn La Siesta, 94 Mã Mây, Hoàn Kiếm, Hà Nội",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-28",
        "address": "Ga Hà Nội, Lê Duẩn, Hà Nội",
        "lat": 21.024957,
        "lng": 105.841424,
        "patientGroup": "F0",
        "note": "Đi từ khách sạn La Siesta, 94 Mã Mây, Hoàn Kiếm, Hà Nội đến Ga Hà Nội (22h) để đi Lào Cai",
        "verifyDate": "2020-03-04T00:00:00"
    }, {
        "name": "BN-28, BN-29",
        "address": "Ga Lào Cai",
        "lat": 22.492118,
        "lng": 103.978129,
        "patientGroup": "F0",
        "note": "Đi tàu hỏa từ Ga Hà Nội ngày 4/3/2020 lúc 22h đến Ga Lào Cai ngày 5/3/2020 lúc 6h20'",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-30",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.219615,
        "lng": 105.801896,
        "patientGroup": "F0",
        "note": "từ 1/3/2020 11:10:00 đến 2/3/2020 5:20:00 London Heathrow Airport, Luân Đôn, Anh Quốc - Máy bay VN0054",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-28, BN-29",
        "address": "Khách sạn Mường Thanh Lào Cai",
        "lat": 22.502586,
        "lng": 103.965606,
        "patientGroup": "F0",
        "note": "Đi từ ga Hà Nội lúc 6h20' nghỉ tại Khách sạn Mường Thanh Lào Cai lúc 7h20",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-30",
        "address": "Sân bay Phú Bài - Huế",
        "lat": 16.397814,
        "lng": 107.700991,
        "patientGroup": "F0",
        "note": "từ 1/3/2020 11:10:00 đến 2/3/2020 5:20:00 di chuyển Sân bay quốc tế Nội Bài, Hà Nội - VN1547 Sân bay Phú Bài - Huế",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-31",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 5h20p ngày 2/3/2020 đến 5h40p ngày 2/3/2020: Đến sân bay Nội Bài",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-28, BN-29",
        "address": "Văn phòng Công ty Phú Thịnh",
        "lat": 22.470682,
        "lng": 103.981638,
        "patientGroup": "F0",
        "note": "Đi từ Khách sạn Mường Thanh Lào Cai đến văn phòng công ty Phú Thịnh trong ngày 5/3/2020",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-31",
        "address": "Đi chơi Hà Nội",
        "lat": 21.029122,
        "lng": 105.851334,
        "patientGroup": "F0",
        "note": "Từ 2/3/2020 đến 4/3/2020: đi chơi Hà Nội",
        "verifyDate": "2020-03-04T00:00:00"
    }, {
        "name": "BN-33",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.218065,
        "lng": 105.805458,
        "patientGroup": "F0",
        "note": "từ 1/3/2020 11:10:00 đến 2/3/2020 5:20:00 London Heathrow Airport, Luân Đôn, Anh Quốc - Máy bay VN0054",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-28, BN-29",
        "address": "Khách sạn Topas Ecolodge Sapa",
        "lat": 22.276246,
        "lng": 103.967045,
        "patientGroup": "F0",
        "note": "Đi từ Lào Cai (20h) đến Khách sạn Topas Ecolodge Sapa (21h) ngày 5/3/2020\r\nỞ Khách sạn Topas Ecolodge Sapa từ 21h ngày 5/3/2020 đến 15h ngày 7/3/2020",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-31",
        "address": "Đi du lịch Hạ Long",
        "lat": 20.953955,
        "lng": 107.052112,
        "patientGroup": "F0",
        "note": "Từ 04/03/2020 đến 05/03/2020: đi chơi Hạ Long",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-35",
        "address": "Điện Máy Xanh, 7 Nguyễn Văn Linh, Đà Nẵng",
        "lat": 16.060457,
        "lng": 108.216094,
        "patientGroup": "F0",
        "note": "từ 4/3/2020 18:49:00 đến 4/3/2020 19:00:00 làm việc tại Điện Máy Xanh, 7 Nguyễn Văn Linh, Đà Nẵng",
        "verifyDate": "2020-03-04T00:00:00"
    }, {
        "name": "BN-34",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Quốc tế Doha, Qatar ngày 1/3/2020 18h45 đến Sân bay Quốc tế Tân Sơn Nhất ngày 2/3/2020 lúc 6h qua chuyến bay QR 974",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-31",
        "address": "Sân bay quốc tế Đà Nẵng",
        "lat": 16.057299,
        "lng": 108.201181,
        "patientGroup": "F0",
        "note": "Từ 19h20p ngày 5/3/2020 đến 19h40p ngày 5/3/2020: Đến sân bay Quốc tế Đà Nẵng",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-35",
        "address": "Siêu thị Danavi, Đà Nẵng",
        "lat": 16.070602,
        "lng": 108.220958,
        "patientGroup": "F0",
        "note": "từ 3/7/2020 18:30:00 đến 3/7/2020 19:30:00 đến Siêu thị Danavi, Đà Nẵng",
        "verifyDate": "2020-03-07T00:00:00"
    }, {
        "name": "BN-39",
        "address": "Đưa hành khách đi tour Ninh Bình",
        "lat": 20.216611,
        "lng": 105.937606,
        "patientGroup": "F0",
        "note": "Đi từ Hà Nội 7h sáng 4/3/2020 đến Ninh Bình đưa hành khách đi du lịch bằng ô tô cùng BN-24, quay lại Hà Nội 19h tối 4/3/2020",
        "verifyDate": "2020-03-04T00:00:00"
    }, {
        "name": "BN-31",
        "address": "Đi chơi Hội An",
        "lat": 15.928861,
        "lng": 108.317649,
        "patientGroup": "F0",
        "note": "từ ngày 05/03/2020 đến 07/03/2020: Đi chơi Hội An",
        "verifyDate": "2020-03-05T00:00:00"
    }, {
        "name": "BN-35",
        "address": "Vinmart 408 Hoàng Diệu",
        "lat": 16.066464,
        "lng": 108.22207,
        "patientGroup": "F0",
        "note": "từ 3/9/2020 16:30:00 đến 3/9/2020 17:00:00 đi Vinmart 408 Hoàng Diệu",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-39",
        "address": "Đưa hành khách đi du lịch Hà Nội",
        "lat": 21.030385,
        "lng": 105.851085,
        "patientGroup": "F0",
        "note": "Đưa hành khách đi tour du lịch xung quanh Hà Nội",
        "verifyDate": "2020-03-06T00:00:00"
    }, {
        "name": "BN-39",
        "address": "Đưa hành khách đi tour Ninh Bình",
        "lat": 20.216611,
        "lng": 105.937606,
        "patientGroup": "F0",
        "note": "Đi từ Hà Nội (7/3/2020 lúc 7h) đến Ninh Bình cùng khách du lịch và quay lại Hà Nội (7/3/2020 lúc 19h)",
        "verifyDate": "2020-03-07T00:00:00"
    }, {
        "name": "BN-49",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.220435,
        "lng": 105.801306,
        "patientGroup": "F0",
        "note": "từ 1/3/2020 11:10:00 đến 2/3/2020 5:20:00 London Heathrow Airport, Luân Đôn, Anh Quốc - Máy bay VN0054",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-49",
        "address": "Sân bay Phú Bài - Huế",
        "lat": 16.397845,
        "lng": 107.699762,
        "patientGroup": "F0",
        "note": "Từ 6/3/2020 16:05:00 đến 6/3/2020 17:20:00\t1.25\tdi chuyển Sân bay quốc tế Nội Bài, Hà Nội\r\nVN1547 đến Huế\"",
        "verifyDate": "2020-03-06T00:00:00"
    }, {
        "name": "BN-46",
        "address": "Sân bay Nội Bài",
        "lat": 21.218745,
        "lng": 105.802465,
        "patientGroup": "F0",
        "note": "Từ 5h20p ngày 3/9/2020 đến 5h40p ngày 3/9/2020: Tới Sân bay Nội Bài",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-39",
        "address": "Đưa khách đi tour Ninh Bình",
        "lat": 20.216611,
        "lng": 105.937606,
        "patientGroup": "F0",
        "note": "Đi từ Hà Nội sáng 08/03/2020 lúc 7h sáng đi Ninh Bình đưa khách đi du lịch quay lại Hà Nội tối 08/03/2020 lúc 19h.",
        "verifyDate": "2020-03-08T00:00:00"
    }, {
        "name": "BN-50",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.219435,
        "lng": 105.802969,
        "patientGroup": "F0",
        "note": "từ 3/8/2020 11:00:00 đến 3/9/2020 5:20:00 London Heathrow Airport, Luân Đôn, Anh Quốc - Máy bay VN0054",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-46",
        "address": "Trung tâm Y tế Hàng không",
        "lat": 21.039573,
        "lng": 105.87895,
        "patientGroup": "F0",
        "note": "Từ 9h ngày 3/11/2020 đến 11h ngày 3/11/2020: Khám tại Trung tâm Y tế Hàng không",
        "verifyDate": "2020-03-11T00:00:00"
    }, {
        "name": "BN-50",
        "address": "Phố Hồng Long, Tổ 2, Khu 4B, phường Hồng Hải, Hạ Long",
        "lat": 20.953809,
        "lng": 107.101121,
        "patientGroup": "F0",
        "note": "từ 3/9/2020 5:20:00 đến 3/9/2020 8:20:00 từ Sân bay quốc tế Nội Bài, Hà Nội\r\nbằng Xe taxi về phố Hồng Long, Tổ 2, Khu 4B, phường Hồng Hải, Hạ Long",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-51",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 6h10p ngày 3/10/2020 đến 6h30p ngày 3/10/2020: Tới sân bay Nội Bài",
        "verifyDate": "2020-03-10T00:00:00"
    }, {
        "name": "BN-52",
        "address": "Sân bay Nội Bài",
        "lat": 21.218745,
        "lng": 105.802465,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay quốc tế Doha từ 12/3/2020 lúc 21h05 bằng máy bay QR968 đến sân bay quốc tế Nội Bài, Hà Nội 10/3/2020 lúc 13h30",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-53",
        "address": "Sân bay quốc tế Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.818101,
        "lng": 106.656864,
        "patientGroup": "F0",
        "note": "từ 3/10/2020 2:15:00 đến 3/10/2020 13:30:00 Sân bay quốc tế Doha Damar, Qatar - Máy bay QR970\r\nvề Sân bay quốc tế Tân Sơn Nhất, Hồ Chí Minh",
        "verifyDate": "2020-03-10T00:00:00"
    }, {
        "name": "BN-51",
        "address": "Nhà hàng Lộc Vừng tại 200 Nguyễn Sơn, Long Biên",
        "lat": 21.045091,
        "lng": 105.881706,
        "patientGroup": "F0",
        "note": "Từ 12h ngày 3/11/2020 đến 13h30p ngày 3/11/2020: ăn trưa tại Căng tin",
        "verifyDate": "0001-01-01T00:00:00"
    }, {
        "name": "BN-54",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815518,
        "lng": 106.664017,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay quốc tế Istabul, Thổ Nhĩ Kỳ ngày 7/3/2020 lúc 2h20 bằng chuyến bay TK162 tới Sân bay quốc tế Tân Sơn Nhất, Hồ Chí Minh ngày 8/3/2020 lúc 17h00",
        "verifyDate": "2020-03-08T00:00:00"
    }, {
        "name": "BN-55",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.219525,
        "lng": 105.800545,
        "patientGroup": "F0",
        "note": "từ 13/03/2020 13:10 đến 14/03/2020 06:10 Charles de Gulles Airport, Paris, Pháp - Máy bay VN18\r\n- Sân bay quốc tế Nội Bài, Hà Nội",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-122",
        "address": "Sân bay quốc tế Đà Nẵng",
        "lat": 16.056397,
        "lng": 108.201087,
        "patientGroup": "F0",
        "note": "Từ 12h45p ngày 20/03/2020 đến 13h05p ngày 20/03/2020: Tới sân bay quốc tế Đà Nẵng",
        "verifyDate": "2020-03-20T00:00:00"
    }, {
        "name": "BN-54",
        "address": "Đi chơi tại Sài Gòn Square, Quận 1, Hồ Chí Minh",
        "lat": 10.772436,
        "lng": 106.700134,
        "patientGroup": "F0",
        "note": "Đi chơi ở Sài Gòn Square từ 19h đến 21h ngày 8/3/2020",
        "verifyDate": "2013-03-08T00:00:00"
    }, {
        "name": "BN-123",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 16.056397,
        "lng": 108.201087,
        "patientGroup": "F0",
        "note": "Từ 13h25p ngày 17/03/2020 đến 13h45p ngày 17/03/2020: tới Tân Sơn Nhất",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-54",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Đến Sân bay Tân Sơn Nhất, Hồ Chí Minh từ 9/3/2020 lúc 17h để lên chuyến bay QH1521 đi Sân bay Phú Quốc",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-54",
        "address": "Sân bay Phú Quốc",
        "lat": 10.163386,
        "lng": 103.998024,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay quốc tế Tân Sơn Nhất, Hồ Chí Minh lúc 17h 09/03/2020 bằng QH1521 tới Sân bay Phú Quốc lúc 18h ngày 09/03/2020",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-121",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Từ 21h45p ngày 17/03/2020 đến 22h05p ngày 17/03/2020: Tới sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-54",
        "address": "Khách sạn La Nube Residence, Tổ 3, ấp, Cửa Lấp, Huyện Phú Quốc, tỉnh Kiên Giang",
        "lat": 10.183397,
        "lng": 103.971871,
        "patientGroup": "F0",
        "note": "Nghỉ tại Khách sạn La Nube Residence ở Tổ 3, ấp, Cửa Lấp, Huyện Phú Quốc, tỉnh Kiên Giang từ 09/3/2020 18h đến 13/03/2020 lúc 20h45",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-54",
        "address": "Sân bay Phú Quốc",
        "lat": 10.163386,
        "lng": 103.998024,
        "patientGroup": "F0",
        "note": "Đi từ Khách sạn La Nube Residence đến Sân bay Phú Quốc ngày 13/3/2020 lúc 20h45 để đi máy bay QH1524 về Hồ Chí Minh",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-54",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 16.056397,
        "lng": 108.201087,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Phú Quốc lúc 20h45 bằng chuyến bay QH1524 đến Sân bay quốc tế Tân Sơn Nhất, Hồ Chí Minh lúc 21h45 ngày 13/3/2020",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-56",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.220455,
        "lng": 105.799032,
        "patientGroup": "F0",
        "note": "từ 3/8/2020 11:00:00 đến 3/9/2020 5:20:00 London Heathrow Airport, Luân Đôn, Anh Quốc\r\n- Máy bay VN0054",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-56",
        "address": "22 Hàng Vôi, Lý Thái Tổ, Hoàn Kiếm, Hà Nội",
        "lat": 21.030737,
        "lng": 105.8561,
        "patientGroup": "F0",
        "note": "từ 3/9/2020 5:20:00 đến 3/10/2020 22:00:00\tKhách sạn Hanoi Paradise Center Hotel",
        "verifyDate": "2020-03-10T00:00:00"
    }, {
        "name": "BN-54",
        "address": "Nghỉ tại khách sạn ở 19B Lê Thị Riêng, Bến Thành, Hồ Chí Minh",
        "lat": 10.771344,
        "lng": 106.691995,
        "patientGroup": "F0",
        "note": " Ở tại nhà nghỉ 19B Lê Thị Riêng, P.Bến Thành, Quận 1, Hồ Chí Minh từ 13/03/2020 lúc 21h45 đến 14/03/2020 lúc 12h00",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-56",
        "address": "Khách sạn Mountain River Homestay Sapa",
        "lat": 22.302216,
        "lng": 103.8942,
        "patientGroup": "F0",
        "note": "từ 3/11/2020 6:20:00 đến 3/11/2020 7:20:00\tGa Lào Cai Khách sạn Mountain River Homestay Sapa",
        "verifyDate": "2020-03-11T00:00:00"
    }, {
        "name": "BN-56",
        "address": "58 Hàng Đào, Hoàn Kiếm, Hà Nội",
        "lat": 21.033215,
        "lng": 105.851075,
        "patientGroup": "F0",
        "note": "từ 3/13/2020 19:32:00 đến 3/14/2020 10:00:00 Ga Hà Nội - Khách sạn Oriental Suiter",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-54",
        "address": "Nhà hàng Nonla Guys, 40/24 Bùi Viện, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh",
        "lat": 10.768184,
        "lng": 106.69422,
        "patientGroup": "F0",
        "note": "ngày 14/03/2020, đến ăn tại Nhà hàng Nonla Guys, 40/24 Bùi Viện, từ 12:00 đến 14:00",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-57",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.218695,
        "lng": 105.802229,
        "patientGroup": "F0",
        "note": "từ 3/8/2020 11:10:00 đến 3/9/2020 5:20:00 London Heathrow Airport, Luân Đôn, Anh Quốc - Máy bay VN0054",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-57",
        "address": "22 Quán Thánh, Ba Đình, Hà Nội",
        "lat": 21.040341,
        "lng": 105.846613,
        "patientGroup": "F0",
        "note": "từ 3/9/2020 5:20:00 đến 3/9/2020 8:15:00 Sân bay quốc tế Nội Bài, Hà Nội - đi Taxi\r\nvề Khách sạn Anise Hotel",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-118",
        "address": "Cửa khẩu Mộc Bài - Tây Ninh",
        "lat": 11.081721,
        "lng": 106.180737,
        "patientGroup": "F0",
        "note": "Từ 13h ngày 19/3/2020 đến 14h ngày 19/3/2020",
        "verifyDate": "2020-03-19T00:00:00"
    }, {
        "name": "BN-54",
        "address": "nhà nghỉ ở 40/7 Bùi Viện, P. Phạm Ngũ Lão, Quận 1",
        "lat": 10.767748,
        "lng": 106.694269,
        "patientGroup": "F0",
        "note": "Đi từ Nhà hàng Nonla Guys, 40/24 Bùi Viện, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh ngày 14/03/2020 lúc 14h tới nhà nghỉ 40/7 Bùi Viện, P. Phạm Ngũ Lão, Quận 1 ngày 14/03/2020 lúc 16h",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-57",
        "address": "Tàu Paradise Hạ Long",
        "lat": 20.916885,
        "lng": 106.986381,
        "patientGroup": "F0",
        "note": "từ 3/10/2020 7:00:00 đến 3/10/2020 10:00:00 Khách sạn Anise Hotel đi Taxi Tàu Paradise Hạ Long",
        "verifyDate": "2020-03-10T00:00:00"
    }, {
        "name": "BN-117",
        "address": "Cửa khẩu Mộc Bài - Tây Ninh",
        "lat": 11.081721,
        "lng": 106.180737,
        "patientGroup": "F0",
        "note": "Từ 15h ngày 19/3/2020 đến 16h ngày 19/3/2020: đến cửa khẩu Mộc Bài - Tây Ninh",
        "verifyDate": "2020-03-19T00:00:00"
    }, {
        "name": "BN-58",
        "address": "Sân bay Nội Bài",
        "lat": 21.218715,
        "lng": 105.8019823,
        "patientGroup": "F0",
        "note": "Đi từ Charles de Gulles Airport, Paris, Pháp 14/03/2020 lúc 13h10 bằng máy bay VN18 tới Sân bay quốc tế Nội Bài, Hà Nội 15/3/2020 lúc 6h10",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-101, BN-102, BN-103, BN-104, BN-105, BN-106",
        "address": "Sân bay Quốc tế Cần Thơ",
        "lat": 10.080694,
        "lng": 105.711523,
        "patientGroup": "F0",
        "note": "Từ 9h20p ngày 18/03/2020 đến 9h40p ngày 18/03/2020: tại Sân bay Quốc tế Cần Thơ",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-57",
        "address": "175 Đường Cửa Đại, Phường Cẩm Châu, Thành Phố Hội An, Tỉnh Quảng Nam",
        "lat": 15.88866,
        "lng": 108.356227,
        "patientGroup": "F0",
        "note": "từ 3/12/2020 18:00:00 đến 3/12/2020 19:30:00 Sân bay Quốc tế Đà Nẵng, Đà Nẵng, đi Taxi, Khách sạn Ven sông",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-59",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.801983,
        "patientGroup": "F0",
        "note": "Đi từ London Heathrow Airport, Luân Đôn, Anh Quốc ngày 1/3/2020 lúc 11h10 bằng máy bay VN0054 tới sân bay quốc tế Nội Bài, Hà Nội ngày 2/3/2020 lúc 5h20",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-100",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Từ 19h45p ngày 3/3/2020 đến 20h05p đến 3/3/2020: tại Sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-03T00:00:00"
    }, {
        "name": "BN-100",
        "address": "Thánh đường Hồi giáo Jamiul Anwar - số 157B/9 Dương Bá Trạc, Phường 1, Quận 8, TP HCM",
        "lat": 10.747249,
        "lng": 106.690599,
        "patientGroup": "F0",
        "note": "Từ ngày 04/3/2020 đến ngày 17/3/2020: đi lễ 5 lần/ngày tại Thánh đường Hồi giáo Jamiul Anwar ",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-60",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.218225,
        "lng": 105.801251,
        "patientGroup": "F0",
        "note": "từ 3/9/2020 13:10:00 đến 10/3/2020 6:10:00 Charles de Gulles Airport, Paris, Pháp - Máy bay VN18\r\nSân bay quốc tế Nội Bài, Hà Nội",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-112",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 5h15p ngày 18/03/2020 đến 5h35p ngày 18/03/2020: tại sân bay Nội Bài",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-60",
        "address": "22 Hàng Vôi, Lý Thái Tổ, Hoàn Kiếm, Hà Nội",
        "lat": 21.030712,
        "lng": 105.856092,
        "patientGroup": "F0",
        "note": "từ 10/3/2020 6:10:00 đến 11/3/2020 7:00:00\t49 Khách sạn Hanoi Paradise Center Hotel",
        "verifyDate": "2020-03-10T00:00:00"
    }, {
        "name": "BN-61",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815448,
        "lng": 106.664058,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Quốc tế Kuala Lumpur, Malaysia 4/3/2020 lúc 13h35 bằng máy bay VJ826 tới Sân bay Quốc tế Tân Sơn Nhất, Hồ Chí Minh 4/3/2020 lúc 14h30",
        "verifyDate": "2020-03-04T00:00:00"
    }, {
        "name": "BN-111",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 05h15p ngày 18/03/2020 đến 05h35p ngày 18/03/2020: tại sân bay Nội Bài",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-60",
        "address": "Ninh Bình",
        "lat": 20.25478,
        "lng": 105.924468,
        "patientGroup": "F0",
        "note": "từ 11/3/2020 7:00:00 đến 11/3/2020 9:30:00\tKhách sạn Hanoi Paradise Center Hotel, 22 Hàng Vôi, Lý Thái Tổ, Hoàn Kiếm, Hà Nội đi Taxi tới Ninh Bình",
        "verifyDate": "2020-03-11T00:00:00"
    }, {
        "name": "BN-114",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 11h30p ngày 15/03/2020 đến 11h50p ngày 15/03/2020: tại Sân bay Nội Bài",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-62",
        "address": "Sân bay quốc tế Vân Đồn, Quảng Ninh",
        "lat": 21.113909,
        "lng": 107.419395,
        "patientGroup": "F0",
        "note": "Từ Sân bay London Heathrow Airport, Luân Đôn, Anh Quốc 5/3/2020 lúc 11h10 bằng máy bay VN0054 tới sân bay quốc tế Vân Đồn, Quảng Ninh 6/3/2020 lúc 5h20",
        "verifyDate": "2020-03-06T00:00:00"
    }, {
        "name": "BN-108, BN-113",
        "address": "Khách sạn Hòa Bình, 27 Lý Thường Kiệt, Hàng Bài, Hoàn Kiếm, Hà Nội",
        "lat": 21.022224,
        "lng": 105.853759,
        "patientGroup": "F0",
        "note": "Từ 18/03/2020 đến 20/03/2020: ở tại Khách sạn Hòa Bình",
        "verifyDate": "0001-01-01T00:00:00"
    }, {
        "name": "BN-63",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.216445,
        "lng": 105.805448,
        "patientGroup": "F0",
        "note": "từ 15/03/2020 19:20 đến 15/03/2020 22:00 Sân bay quốc tế Nội Bài, Hà Nội - Xe di chuyển đến nơi cách ly - Trung đoàn Bộ binh B59, Xuân Mai, Chương Mỹ",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-65",
        "address": "Số 1a Phạm Ngọc Thạch, Bến Nghé, Quận 1, Hồ Chí Minh",
        "lat": 10.824524,
        "lng": 106.681165,
        "patientGroup": "F0",
        "note": "từ 7/3/2020 8:00:00\tđến 7/3/2020 9:00:00, đường Phạm Ngũ Lão, phường 7, quận Gò Vấp, TP.HCM\r\nCông ty TOTO Việt Nam",
        "verifyDate": "2020-03-07T00:00:00"
    }, {
        "name": "BN-108",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "từ 5h15p ngày 18/03/2020 đến 5h35p ngày 18/03/2020: tại Sân bay Nội Bài",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-64",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.818433,
        "lng": 106.658829,
        "patientGroup": "F0",
        "note": "Từ Sân bay Quốc tế Dubai, UAE ngày 15/03/2020 lúc 05h30 bằng máy bay EK392 tới Sân bay Quốc tế Tân Sơn Nhất, Hồ Chí Minh ngày 15/03/2020 lúc 19h20",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-66",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.81536,
        "lng": 106.663975,
        "patientGroup": "F0",
        "note": "từ 16/03/2020 07:20:00 đến 16/03/2020 09:50:00, Sân bay Quốc tế Taiwan - Máy bay BR395 - Sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-107",
        "address": "Quán miến lươn 42 phố Thái Hà",
        "lat": 21.010368,
        "lng": 105.822716,
        "patientGroup": "F0",
        "note": "Từ 12h ngày 13/03/2020 đến 13h30p ngày 13/03/2020: ăn trưa",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-107",
        "address": "Dance More Studios tại Tầng 2 số 281 Đội Cấn, Ba Đình",
        "lat": 21.035587,
        "lng": 105.819787,
        "patientGroup": "F0",
        "note": "Từ 17h ngày 17/03/2020 đến 22h ngày 17/03/2020: đi tập nhảy",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-67",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.818433,
        "lng": 106.658829,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay quốc tế Kuala Lumpur ngày 4/3/2020 lúc 13h35 bằng máy bay VJ826 tới Sân bay Tân Sơn Nhất ngày 4/3/2020 lúc 14h30",
        "verifyDate": "2020-03-04T00:00:00"
    }, {
        "name": "BN-99",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Từ 07h10p ngày 18/03/2020 đến 07h30p ngày 18/03/2020: tại sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-115",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 9h10p ngày 18/03/2020 đến 09h20p ngày 18/03/2020: tại Sân bay Quốc tế Nội Bài",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-69",
        "address": "Sân bay Nội Bài",
        "lat": 21.218905,
        "lng": 105.801907,
        "patientGroup": "F0",
        "note": "từ 12/3/2020 20:10:00 đến 13/3/2020 09:10:00, Sân bay quốc tế Moscow - Máy bay SU290 - Sân bay Nội Bài",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-68",
        "address": "Sân bay quốc tế Đà Nẵng",
        "lat": 16.056324,
        "lng": 108.200887,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Chagi, Singapore 14/03/2020 lúc 09h15 bằng máy bay MI632 tới sân bay Đà Nẵng 14/03/2020 lúc 11h00",
        "verifyDate": "2014-03-14T00:00:00"
    }, {
        "name": "BN-70",
        "address": "Sân bay quốc tế Nội Bài",
        "lat": 21.218905,
        "lng": 105.801907,
        "patientGroup": "F0",
        "note": "từ 16/03/2020 02:20:00 đến 16/03/2020 16:10:00, Sân bay Istabul - Máy bay TK164 - Sân bay quốc tế Nội Bài",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-109",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 9h35p ngày 15/03/2020 đến 9h50p ngày 15/03/2020: tại Sân bay Quốc tế Nội Bài",
        "verifyDate": "0001-01-01T00:00:00"
    }, {
        "name": "BN-71",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Istabul ngày 16/03/2020 lúc 02h20 bằng máy bay TK164 tới sân bay quốc tế Nội Bài ngày 16/03/2020 lúc 16h10",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-72",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.218905,
        "lng": 105.801907,
        "patientGroup": "F0",
        "note": "từ 3/9/2020 13:10:00 đến 10/3/2020 6:10:00, Charles de Gulles Airport, Paris, Pháp - \r\nMáy bay VN18 - Sân bay quốc tế Nội Bài, Hà Nội",
        "verifyDate": "2020-03-10T00:00:00"
    }, {
        "name": "BN-113",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 5h15p ngày 18/03/2020 đến 5h35p ngày 18/03/2020: tại Sân bay Nội Bài",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-110",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 18h30p ngày 19/03/2020 đến 18h50p ngày 19/03/2020: Tại Sân bay Nội Bài",
        "verifyDate": "2020-03-19T00:00:00"
    }, {
        "name": "BN-73",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ London Heathrow Airport, Luân Đôn, Anh Quốc 8/3/2020 lúc 11h10 bằng máy bay VN0054 tới sân bay quốc tế Nội Bài, Hà Nội 9/3/2020 lúc 5h20",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-74",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ Charles de Gulles Airport, Paris, Pháp ngày 15/03/2020 lúc 13h10 bằng máy bay VN18 tới sân bay quốc tế Nội Bài, Hà Nội ngày 16/3/2020 lúc 6h10",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-75",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.818433,
        "lng": 106.6588,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay London Heathrow, Anh Quốc 14/03/2020 lúc 11h bằng máy bay VN50 tới sân bay Tân Sơn Nhất 15/03/2020 lúc 06h15",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay quốc tế Istabul, Thổ Nhĩ Kỳ ngày 10/3/2020 2h20 bằng máy bay TK162 tới Sân bay quốc tế Tân Sơn Nhất, Hồ Chí Minh lúc 10/3/2020 17h00",
        "verifyDate": "2020-03-10T00:00:00"
    }, {
        "name": "BN-97, BN-98",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Từ 13h5p ngày 6/3/2020 đến 13h30p ngày 6/3/2020: tại Sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-77",
        "address": "Sân bay quốc tế Nội Bài",
        "lat": 21.218025,
        "lng": 105.805287,
        "patientGroup": "F0",
        "note": "từ 17/03/2020 02:55:00 đến 17/03/2020 13:30:00\t5.8, Sân bay quốc tế Doha - Máy bay QR976 - Sân bay quốc tế Nội Bài",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-91, BN-97, BN-98, BN-120, BN-124, BN-125, BN-126, BN-127, BN-157, BN-158, BN-159, BN-206, BN-207, BN-224, BN-235, BN-236",
        "address": "Budda Bar&Grill (số 7 đường Thảo Điền, phường Thảo Điền, quận 2, TPHCM)",
        "lat": 10.802106,
        "lng": 106.738167,
        "patientGroup": "F0",
        "note": "Từ 22h ngày 14/03/2020 đến 2h ngày 15/03/2020",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Khách sạn Aristo Sài Gòn",
        "lat": 10.780963,
        "lng": 106.694799,
        "patientGroup": "F0",
        "note": "Từ Sân bay quốc tế Tân Sơn Nhất lúc 10/3/2020 17h00 tới Khách sạn Aristo Sài Gòn, lưu trú tại khách sạn này tới 11/3/2020 19h00",
        "verifyDate": "2020-03-10T00:00:00"
    }, {
        "name": "BN-78",
        "address": "Sân bay Nội Bài",
        "lat": 21.218025,
        "lng": 105.805287,
        "patientGroup": "F0",
        "note": "từ 17/03/2020 02:55:00 đến 17/03/2020 13:30, Sân bay quốc tế Dubai - Máy bay EK394 - Sân bay Nội Bài",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-79, BN-80",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815441,
        "lng": 106.663971,
        "patientGroup": "F0",
        "note": "từ 13/03/2020 20:20:00 đến 15/03/2020 07:20:00, Sân bay quốc tế London Healthrow - Máy bay EK4 - EK392 - Sân bay quốc tế Dubai - Sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-96",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Từ 19h35p ngày 19/03/2020 đến 19h50p ngày 19/03/2020: tại Sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-19T00:00:00"
    }, {
        "name": "BN-81",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815441,
        "lng": 106.663971,
        "patientGroup": "F0",
        "note": "từ 14/03/2020 13:10:00 đén 15/03/2020 07:10:00, Sân bay quốc tế Dubai - AF258 - Sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Khách sạn West Cần Thơ",
        "lat": 10.032598,
        "lng": 105.788249,
        "patientGroup": "F0",
        "note": "Lưu trú Khách sạn West Cần Thơ từ 23h59 ngày 11/3/2020 tới 09h00 ngày 12/3/2020",
        "verifyDate": "2020-03-11T00:00:00"
    }, {
        "name": "BN-82",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815441,
        "lng": 106.663971,
        "patientGroup": "F0",
        "note": "từ 14/03/2020 04:01:00\tđến 15/03/2020 13:55:00, Sân bay quốc tế Dubai - Máy bay EK364 -Sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-83, BN-204",
        "address": "Sân bay quốc tế Tân Sơn Nhất",
        "lat": 10.815441,
        "lng": 106.663971,
        "patientGroup": "F0",
        "note": "từ 14/03/2020 02:20:00 đến 15/03/2020 17:00:00\t9.3, Sân bay quốc tế Istabul, Thổ Nhĩ Kỳ- TK162-Sân bay quốc tế Tân Sơn Nhất",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-84, BN-85",
        "address": "Sân bay Nội Bài",
        "lat": 21.219395,
        "lng": 105.800738,
        "patientGroup": "F0",
        "note": "từ 17/03/2020 11:00:00 đến 18/03/2020 05:15:00, Sân bay London Healthrow- VN54-Sân bay Nội Bài",
        "verifyDate": "2020-03-08T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Đi từ Cần Thơ tới Sân bay Tân Sơn Nhất, Hồ Chí Minh để đáp chuyến bay đi Đà Nẵng ngày 12/3/2020 lúc 18h05",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-86",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815393,
        "lng": 106.663987,
        "patientGroup": "F0",
        "note": "từ 6/3/2020 7:55:00\t đến 6/3/2020 9:00:00, Sân bay Nội Bài - Máy bay VN7209 -Sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-06T00:00:00"
    }, {
        "name": "BN-86",
        "address": "Sân bay Côn Đảo",
        "lat": 8.730596,
        "lng": 106.62875,
        "patientGroup": "F0",
        "note": "từ 6/3/2020 9:30:00\t đến 6/3/2020 10:30:00, Sân bay Tân Sơn Nhất - Máy bay VN8059 - Sân bay Côn Đảo",
        "verifyDate": "2020-03-06T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Sân bay quốc tế Đà Nẵng",
        "lat": 16.056397,
        "lng": 108.201087,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Tân Sơn Nhất ngày 12/3/2020 lúc 18h05 bằng máy bay VJ642 tới sân bay Đà Nẵng ngày 12/3/2020 lúc 19h25",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-86",
        "address": "Số 8 Nguyễn Đức Thuận, Biển An Hải, Quần Đảo Côn Đảo, Việt Nam",
        "lat": 8.679048,
        "lng": 106.601812,
        "patientGroup": "F0",
        "note": "từ 6/3/2020 10:30:00 đến 8/3/2020 8:00:00 ở Côn Đảo Resort",
        "verifyDate": "2020-03-08T00:00:00"
    }, {
        "name": "BN-95",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Từ 19h35p ngày 18/03/2020 tới 19h50p 18/03/2020: tại sân bay Tân Sơn Nhất",
        "verifyDate": "0001-01-01T00:00:00"
    }, {
        "name": "BN-88",
        "address": "Sân bay Nội Bài",
        "lat": 21.219505,
        "lng": 105.800469,
        "patientGroup": "F0",
        "note": "từ 12/3/2020 11:00:00 đến 13/03/2020 05:15:00, Sân bay London Healthrow - VN54 - Sân bay Nội Bài",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Khách sạn Le Pavillon Hội An, 156 Hai Bà Trưng, Hội An, Quảng Nam",
        "lat": 15.879503,
        "lng": 108.345664,
        "patientGroup": "F0",
        "note": "Lưu trú tại Khách sạn Le Pavillon Hội An, 156 Hai Bà Trưng, Hội An, Quảng Nam từ 12/3/2020 lúc 20h25 tới 14/03/2020 lúc 7h00",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-88",
        "address": "KĐT Văn Quán, Phúc La, Hà Đông, Hà Nội",
        "lat": 20.97472,
        "lng": 105.789441,
        "patientGroup": "F0",
        "note": "từ 13/03/2020 05:30:00 đến 13/03/2020 07:30:00, Sân bay Nội Bài  về Nhà riêng",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-89",
        "address": "Sân bay quốc tế Tân Sơn Nhất",
        "lat": 10.820339,
        "lng": 106.647897,
        "patientGroup": "F0",
        "note": "từ 17/03/2020 16:45:00 đến 17/03/2020 21:45:00, Sân bay quốc tế Narita - Máy bay NH831\r\nSân bay quốc tế Tân Sơn Nhất",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-93, BN-94",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Từ 9h10p ngày 18/03/2020 tới 9h30p ngày 18/03/2020: tại sân bay Nội Bài",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Khách sạn Thanh lịch Royal Boutique Huế, Thành phố Huế, Thừa Thiên Huế",
        "lat": 16.460614,
        "lng": 107.58963,
        "patientGroup": "F0",
        "note": "Lưu trú tại Khách sạn Thanh lịch Royal Boutique Huế, Thành phố Huế, Thừa Thiên Huế từ 14/03/2020 lúc 9h45 tới 15/03/2020 lúc 20h30",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-90",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.820339,
        "lng": 106.647897,
        "patientGroup": "F0",
        "note": "từ 14/03/2020 09:40:00 đến 15/03/2020 19:35:00, Sân bay Quốc tế Dubai - EK392 - Sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-91, BN-92",
        "address": "Sân bay Nội Bài",
        "lat": 21.216315,
        "lng": 105.802454,
        "patientGroup": "F0",
        "note": "từ 16/03/2020 07:00:00 đến 16/03/2020 09:10:00, Sân bay Tân Sơn Nhất - Máy bay VN272 - Sân bay Nội Bài",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Ga Huế",
        "lat": 16.456445,
        "lng": 107.577997,
        "patientGroup": "F0",
        "note": "Di chuyển từ Khách sạn Thanh lịch Royal Boutique Huế, 33 Hai Bà Trưng, Vĩnh Ninh, Thành phố Huế, Thừa Thiên Huế tới Ga Huế vào 15/3/2020 lúc 21h30",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Ga Ninh Bình",
        "lat": 20.242091,
        "lng": 105.974512,
        "patientGroup": "F0",
        "note": "Đi từ Ga Huế từ 21h30 ngày 15/03/2020 tới ga Ninh Bình lúc 9h30 ngày 16/03/2020",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Khách sạn Ninh Bình Legend, Ninh Bình",
        "lat": 20.274301,
        "lng": 105.958624,
        "patientGroup": "F0",
        "note": "Lưu trú ở Khách sạn Legend Ninh Bình từ 10h ngày 16/03/2020 tới 7h ngày 17/03/2020",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-128, BN-129",
        "address": "Sân bay quốc tế Nội Bài",
        "lat": 21.216315,
        "lng": 105.802454,
        "patientGroup": "F0",
        "note": "về nước 20/03/2020, Tới sân bay Nội Bài, cách ly sau nhập cảnh",
        "verifyDate": "2020-03-20T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Hạ Long Sail Hotel, Hạ Long, Quảng Ninh",
        "lat": 20.956666,
        "lng": 107.048508,
        "patientGroup": "F0",
        "note": "Di chuyển từ khách sạn Legend Ninh Bình đến Khách sạn HaLong Sail Hotel, Hạ Long, Quảng Ninh từ ngày 17/03/2020 lúc 10h sáng tới 7h sáng ngày 18/3/2020",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-130, BN-131, BN-132",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.216315,
        "lng": 105.802454,
        "patientGroup": "F0",
        "note": "Tới sân bay Nội Bài, cách ly sau nhập cảnh",
        "verifyDate": "2020-03-22T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Khách sạn Mường Thanh Grand Hà Nội",
        "lat": 21.023361,
        "lng": 105.847699,
        "patientGroup": "F0",
        "note": "Di chuyển từ Hạ Long Sails, Quảng Ninh đến Khách sạn Mường Thanh Grand Hà Nội từ 10h ngày 18/03/2020 tới 21h ngày 19/3/2020",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-133",
        "address": "Lai Châu",
        "lat": 22.103886,
        "lng": 103.654147,
        "patientGroup": "F0",
        "note": "Di chuyển từ Bạch Mai về Lai Châu",
        "verifyDate": "2020-03-24T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Phở Thìn Đinh Tiên Hoàng",
        "lat": 21.030213,
        "lng": 105.854026,
        "patientGroup": "F0",
        "note": " Di chuyển từ Khách sạn Mường Thanh Hà Nội tới Phở Thìn Đinh Tiên Hoàng lúc 20h30",
        "verifyDate": "2020-03-19T00:00:00"
    }, {
        "name": "BN-138, BN-139, BN-140",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.21871,
        "lng": 105.802309,
        "patientGroup": "F0",
        "note": "Nhập cảnh 21/03/2020, tại sân bay Nội Bài trên chuyến bay VN54 ngày 21/3/2020, cách ly sau nhập cảnh",
        "verifyDate": "2020-03-21T00:00:00"
    }, {
        "name": "BN-134",
        "address": "Sân bay Nội Bài",
        "lat": 21.21875,
        "lng": 105.80419,
        "patientGroup": "F0",
        "note": "Bay từ Moscow, Nga từ 17/3/2020 qua chuyến bay SU290 tới Sân bay Nội bài ngày 18/3/2020",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-135",
        "address": "Sân bay quốc tế Đà Nẵng",
        "lat": 16.056333,
        "lng": 108.200895,
        "patientGroup": "F0",
        "note": "Đi từ Copenhagen, Đan Mạch tới Sân bay Đà Nẵng ngày 21/3/2020 qua chuyến bay PG974 (Quá cảnh qua Thái Lan, Qatar)",
        "verifyDate": "2020-03-21T00:00:00"
    }, {
        "name": "BN-136",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.21871,
        "lng": 105.802309,
        "patientGroup": "F0",
        "note": "Ngày 16/03/2020 tới sân bay Nội Bài, trên chuyến bay BR0397 ngày 16/03/2020, cách ly sau nhập cảnh",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-137",
        "address": "Sân bay Nội Bài",
        "lat": 21.218425,
        "lng": 105.804255,
        "patientGroup": "F0",
        "note": "Di chuyển từ Đức tới Sân bay Nội Bài, Hà Nội ngày 15/3/2020",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Tân Hoàng Minh, 36 Hoàng Cầu, Ô Chợ Dừa, Đống Đa",
        "lat": 21.015823,
        "lng": 105.82126,
        "patientGroup": "F0",
        "note": "Lưu trú tại Chung cư Tân Hoàng Minh, 36 Hoàng Cầu, Ô Chợ Dừa, Đống Đa",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Cửa hàng giặt là PARIS LAUNDRY, 36 Hàm Long",
        "lat": 21.019556,
        "lng": 105.852514,
        "patientGroup": "F0",
        "note": "Chiều - đến cửa hàng giặt là PARIS LAUNDRY (36 Hàm Long) (10 phút)",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Lela Coffee 40 Trần Hưng Đạo",
        "lat": 21.020819,
        "lng": 105.853207,
        "patientGroup": "F0",
        "note": "Đến Lela Coffee 40 Trần Hưng Đạo trong 40 phút",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-148",
        "address": "74 Thợ Nhuộm, Hà Nội",
        "lat": 21.02356,
        "lng": 105.84752,
        "patientGroup": "F0",
        "note": "Ngày 16/03/2020 Đi ngân hàng BIDV – chi nhánh Hà Thành ở 74 Thợ Nhuộm",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-148",
        "address": "số 02 Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
        "lat": 21.008813,
        "lng": 105.850889,
        "patientGroup": "F0",
        "note": "16/03/2020 đi đến VPS (Công ty đầu tư chứng khoán VPSB) tại số 02 Đại Cồ Việt để giao dịch ",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-148",
        "address": "8 Phan Chu Trinh, Tràng Tiền, Hoàn Kiếm, Hà Nội, Việt Nam",
        "lat": 21.0235,
        "lng": 105.856548,
        "patientGroup": "F0",
        "note": "Uống cà phê ở quán O'DOUCEURS số 8 Phan Chu Trinh",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Lý Thường Kiệt, Phan Chu Trinh, Hoàn Kiếm, Hà Nội",
        "lat": 21.021839,
        "lng": 105.855279,
        "patientGroup": "F0",
        "note": "Đến phòng tập Gym ở Lý Thường Kiệt ",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-136",
        "address": "Khu BT 3, Linh Đàm, Hoàng Mai, Hà Nội",
        "lat": 20.963044,
        "lng": 105.833101,
        "patientGroup": "F0",
        "note": "Tự cách ly ở nhà",
        "verifyDate": "2020-03-20T00:00:00"
    }, {
        "name": "BN-142",
        "address": "Tân Túc, Huyện Bình Chánh, TP.Hồ Chí Minh",
        "lat": 10.685015,
        "lng": 106.573253,
        "patientGroup": "F0",
        "note": "Từ ngày 10/03/2020 đến 23/3/2020, lưu trú tại xã Tân Túc, huyện Bình Chánh",
        "verifyDate": "2020-03-10T00:00:00"
    }, {
        "name": "BN-142",
        "address": "371 Điện Biên Phủ, Phường 4, Quận 3, Hồ Chí Minh",
        "lat": 10.77411,
        "lng": 106.681018,
        "patientGroup": "F0",
        "note": "Đi đến thăm người nhà tại Bệnh viện Bình Dân",
        "verifyDate": "2020-03-11T00:00:00"
    }, {
        "name": "BN-142",
        "address": "Lãnh sự quán Hoa Kỳ, 4 Lê Duẩn, Bến Nghé, Quận 1, Hồ Chí Minh",
        "lat": 10.782768,
        "lng": 106.700602,
        "patientGroup": "F0",
        "note": "Đến thăm người nhà tại Lãnh sự quán Hoa Kỳ",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-107",
        "address": "Quán bún đậu mắm tôm ngõ 13 Thái Hà",
        "lat": 21.014944,
        "lng": 105.815432,
        "patientGroup": "F0",
        "note": "Ăn bún đậu trong 13 ngõ Thái Hà (Quán tên là 173 Thái Hà) vào khung giờ ăn trưa từ 12-14h",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-107",
        "address": "Quán thịt xiên nướng, Hồ Đắc Di",
        "lat": 21.011685,
        "lng": 105.830307,
        "patientGroup": "F0",
        "note": "Đến quán thịt xiên nướng ở ven hồ Hồ Đắc Di trong khoảng thời gian từ 17-19h",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-107",
        "address": "Vinmart, Vincom Phạm Ngọc Thạch, Phạm Ngọc Thạch",
        "lat": 21.006213,
        "lng": 105.831936,
        "patientGroup": "F0",
        "note": "Đến Vinmart, Vincom Phạm Ngọc Thạch, Hà Nội từ 19-22h tối 15/3/2020",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-141",
        "address": "Vinmart ở khu vực Lê Đại Hành, Hai Bà Trưng",
        "lat": 21.01219,
        "lng": 105.847555,
        "patientGroup": "F0",
        "note": "Đi Vinmart ở khu vực Lê Đại Hành, Hai Bà Trưng từ 17-18h ngày 18/03/2020",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-143",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815608,
        "lng": 106.664211,
        "patientGroup": "F0",
        "note": "Đi từ Mỹ quá cảnh qua Đài Loan tới Sân bay Tân Sơn Nhất vào ngày 21/3/2020. Được cách ly ngay sau khi hạ cánh.",
        "verifyDate": "2020-03-21T00:00:00"
    }, {
        "name": "BN-144, BN-145",
        "address": "Sân bay Nội Bài",
        "lat": 21.21847,
        "lng": 105.805449,
        "patientGroup": "F0",
        "note": "Đi từ Anh ngày 21/3/2020 bằng chuyến bay VN50 đến Sân bay Nội Bài ngày 22/3/2020, đã được cách ly sau khi xuống máy bay",
        "verifyDate": "2020-03-22T00:00:00"
    }, {
        "name": "BN-141",
        "address": "Quan Hoa, Cầu Giấy",
        "lat": 21.035963,
        "lng": 105.799475,
        "patientGroup": "F0",
        "note": " Di chuyển từ Bệnh viện Nhiệt đới Trung ương cơ sở Kim Chung đến khu vực Quan Hoa Cầu Giấy từ 9-12h ngày 16/3/2020",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-147",
        "address": "Sân bay Nội Bài",
        "lat": 21.219105,
        "lng": 105.803291,
        "patientGroup": "F0",
        "note": "Đi từ London Heathrow Airport ngày 20/3/2020 bằng chuyến bay VN0054 tới Sân bay Nội Bài ngày 21/3/2020",
        "verifyDate": "2020-03-21T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Sân bay Nội Bài",
        "lat": 21.219105,
        "lng": 105.803291,
        "patientGroup": "F0",
        "note": "Đi từ Pháp ngày 11/3/2020 bằng chuyến bay VN18 đến Sân bay Nội Bài ngày 12/3/2020",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-46",
        "address": "Ngã tư Nguyễn Văn Cừ -Nguyễn Sơn, Hà Nội",
        "lat": 21.046897,
        "lng": 105.878057,
        "patientGroup": "F0",
        "note": "10/03/2020 Ăn cơm ở quán Hoàng Giang ở ngã tư Nguyễn Văn Cừ, Nguyễn Sơn; ăn bún ngan ở quán bún ngan gần Ngã tư Nguyễn Văn Cừ, Nguyễn Sơn",
        "verifyDate": "2020-03-10T00:00:00"
    }, {
        "name": "BN-148",
        "address": " Café AROMA, Mai Anh Tuấn, Hà Nội",
        "lat": 21.018926,
        "lng": 105.822605,
        "patientGroup": "F0",
        "note": "Đến quán café AROMA phố Mai Anh Tuấn sáng 13/3/2020 ",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Quán Mỳ Vằn thắn, phố Nguyên Hồng",
        "lat": 21.016622,
        "lng": 105.810888,
        "patientGroup": "F0",
        "note": "Đi ăn trưa (11-14h) tại nhà hàng mỳ vằn thắn ở Nguyên Hồng",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Quán Mỳ Vằn thắn, phố Nguyên Hồng",
        "lat": 21.016622,
        "lng": 105.810888,
        "patientGroup": "F0",
        "note": "Đi ăn trưa (11-14h) ở quán mỳ vằn thắn ở phồ Nguyên Hồng ngày 14/3/2020",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Vinmart, 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "lat": 21.019512,
        "lng": 105.822774,
        "patientGroup": "F0",
        "note": "Đi siêu thị Vinmart ở 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Vinmart, 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "lat": 21.019512,
        "lng": 105.822774,
        "patientGroup": "F0",
        "note": "Đi siêu thị Vinmart 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "verifyDate": "2020-03-14T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Vinmart, 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "lat": 21.019512,
        "lng": 105.822774,
        "patientGroup": "F0",
        "note": "Đi siêu thị Vinmart 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Vinmart, 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "lat": 21.019512,
        "lng": 105.822774,
        "patientGroup": "F0",
        "note": "Đi siêu thị tai Vinmart 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Vinmart, 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "lat": 21.019512,
        "lng": 105.822774,
        "patientGroup": "F0",
        "note": "Đi siêu thị Vinmart, 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Vinmart, 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "lat": 21.019512,
        "lng": 105.822774,
        "patientGroup": "F0",
        "note": "Đi siêu thị Vinmart, 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-148",
        "address": "Vinmart, 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "lat": 21.019512,
        "lng": 105.822774,
        "patientGroup": "F0",
        "note": "Đi siêu thị Vinmart ở 36 Hoàng Cầu, Ô Chợ Dừa, Hà Nội",
        "verifyDate": "2020-03-19T00:00:00"
    }, {
        "name": "BN-149",
        "address": "Sân bay Vân Đồn",
        "lat": 21.113841,
        "lng": 107.419386,
        "patientGroup": "F0",
        "note": "Đi từ Frankfurt Airport, Đức ngày 22/3 đến Sân bay Vân Đồn ngày 23/3 lúc 6h30, sau đó đã cách ly sau khi xuống sân bay.",
        "verifyDate": "2020-03-23T00:00:00"
    }, {
        "name": "BN-150",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Đi từ Mỹ quá cảnh Đài Loan qua chuyến BR395 đến Sân bay Tân Sơn Nhất ngày 13/3/2020",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-150",
        "address": "Quán bún gánh đường Hàn Thuyên, Hồ Chí Minh",
        "lat": 10.77854,
        "lng": 106.697807,
        "patientGroup": "F0",
        "note": null,
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-150",
        "address": "Nhà hàng Hoa Viên Tri Kỷ, phường 9, Phú Nhuận",
        "lat": 10.810289,
        "lng": 106.672373,
        "patientGroup": "F0",
        "note": "Dự tiệc ở Hoa Viên Tri Kỷ ngày 16/3",
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-151, BN-124",
        "address": "Starbucks, số 21 Thảo Điền, Quận 2, Hồ Chí Minh",
        "lat": 10.803239,
        "lng": 106.737649,
        "patientGroup": "F0",
        "note": "Đến Starbuck tại số 21 Thảo Điền, Quận 2, Hồ Chí Minh hàng ngày (từ 13/3/2020 đến 21/3/2020) ",
        "verifyDate": "2020-03-13T00:00:00"
    }, {
        "name": "BN-151",
        "address": "Siêu thị An Phú, 36 Đường Thảo Điền, Thảo Điền, Quận 2, Hồ Chí Minh",
        "lat": 10.805253,
        "lng": 106.736614,
        "patientGroup": "F0",
        "note": null,
        "verifyDate": "2020-03-16T00:00:00"
    }, {
        "name": "BN-151",
        "address": "Nhà Máy Huê Phong, phường 14, Gò Vấp, Hồ Chí Minh",
        "lat": 10.850325,
        "lng": 106.647135,
        "patientGroup": "F0",
        "note": null,
        "verifyDate": "2020-03-19T00:00:00"
    }, {
        "name": "BN-152",
        "address": "Nhà hàng Chay SEN, 171 Nguyễn Thái Học, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh",
        "lat": 10.768248,
        "lng": 106.694829,
        "patientGroup": "F0",
        "note": "Dùng bữa trưa tại nhà hàng Chay SEN 171 Nguyễn Thái Học, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh ",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-153",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Từ Úc trở về Việt Nam ngày 21/3/2020 trên chuyến bay VN772, đã cách ly sau khi xuống máy bay.",
        "verifyDate": "2020-03-21T00:00:00"
    }, {
        "name": "BN-76, BN-186",
        "address": "Chợ nổi Cái Răng",
        "lat": 10.033982,
        "lng": 105.788305,
        "patientGroup": "F0",
        "note": "Từ 7h ngày 12/03/2020 tới 11h ngày 12/03/2020: Đi chơi tại chợ nổi Cái Răng",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-17",
        "address": "Trúc Bạch, Ba Đình, Hà Nội",
        "lat": 21.045076,
        "lng": 105.841884,
        "patientGroup": "F0",
        "note": "Lưu trú tai khu Trúc Bạch, Ba Đình, Hà Nội",
        "verifyDate": "0001-01-01T00:00:00"
    }, {
        "name": "BN-21",
        "address": "Nguyễn Khắc Nhu, Trúc Bạch, Hà Nội",
        "lat": 21.04426,
        "lng": 105.845205,
        "patientGroup": "F0",
        "note": "Lưu trú tại  khu Nguyễn Khắc Nhu, Trúc Bạch, Hà Nội",
        "verifyDate": "2020-03-02T00:00:00"
    }, {
        "name": "BN-154, BN-155, BN-156",
        "address": "Sân bay Quốc tế Cần Thơ",
        "lat": 10.080673,
        "lng": 105.71185,
        "patientGroup": "F0",
        "note": "Từ 6h15p ngày 22/03/2020 đến 6h35p ngày 22/03/2020: đến sân bay Quốc tế Cần Thơ",
        "verifyDate": "2020-03-22T00:00:00"
    }, {
        "name": "BN-160",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.81558,
        "lng": 106.663824,
        "patientGroup": "F0",
        "note": "Từ 9h30p ngày 22/03/2020 đến 10h ngày 22/03/2020: tại sân bay Tân Sơn Nhất",
        "verifyDate": "2020-03-22T00:00:00"
    }, {
        "name": "BN-146",
        "address": "Sân bay Đà Nẵng",
        "lat": 16.056284,
        "lng": 108.200857,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Suvamabhumi, Bangkok ngày 20/3/2020 11h bằng máy bay PG947 tới sân bay Đà Nẵng, Đà Nẵng ngày 20/03/2020 12h45",
        "verifyDate": "2020-03-20T00:00:00"
    }, {
        "name": "BN-160",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay quốc tế Sheremetyevo, Mát-xco-va, Nga ngày 22/3/2020 19:35 bằng máy bay SU292 tới sân bay Tân Sơn Nhất, TP HCM 22/3/2020 9:30",
        "verifyDate": "2020-03-22T00:00:00"
    }, {
        "name": "BN-164, BN-165",
        "address": "Sân bay quốc tế Vân Đồn, Quảng Ninh",
        "lat": 21.113826,
        "lng": 107.419431,
        "patientGroup": "F0",
        "note": "Đi từ London Heathrow Airport, Luân Đôn ngày 22/3/2020 11:00 bằng máy bay VN54 tới sân bay Vân Đồn ngày 23/3/2020 5:20:00",
        "verifyDate": "2020-03-23T00:00:00"
    }, {
        "name": "BN-166",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ Bangkok suvarnabhumi Airport, Bangkok, Thái Lan ngày 20/03/2020 17:30 bằng máy bay TG564 tới sân bay quốc tế Nội Bài, Hà Nội ngày 20/03/2020 19:20",
        "verifyDate": "2020-03-20T00:00:00"
    }, {
        "name": "BN-167",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ sân bay quốc tế Doha ngày 8/3/2020 lúc 2h55 bằng máy bay QR976 tới sân bay quốc tế Nội Bài ngày 9/3/2020 13h30",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-167",
        "address": "Khách sạn Babylon Garden, Hoàn Kiếm, Hà Nội",
        "lat": 21.031123,
        "lng": 105.855574,
        "patientGroup": "F0",
        "note": "Ở Khách sạn Babylon Garden Hoàn Kiếm, 25-27 Lò Sũ, Lý Thái Tổ, Hoàn Kiếm, Hà Nội từ 9/3/2020 đến 12/3/2020 ",
        "verifyDate": "2020-03-09T00:00:00"
    }, {
        "name": "BN-167",
        "address": "Khách sạn Jasmine Hotel ở xã Phương Thiện, TP Hà Giang",
        "lat": 22.805381,
        "lng": 104.975609,
        "patientGroup": "F0",
        "note": " Đi từ Khách sạn Babylon Garden 12/3/2020 đến Khách sạn Jasmine Hotel ở xã Phương Thiện, TP Hà Giang, lưu trú từ 12/3/2020 đến 5h ngày 15/03/2020",
        "verifyDate": "2020-03-12T00:00:00"
    }, {
        "name": "BN-167",
        "address": "Khách sạn Kingly Hotel, số 8 Lý Thái Tổ, Hoàn Kiếm, Hà Nội",
        "lat": 21.03117,
        "lng": 105.854571,
        "patientGroup": "F0",
        "note": "Đi từ Khách sạn Jasmine Hotel ở xã Phương Thiện, TP Hà Giang 5h sáng ngày 15/3/2020 bằng xe du lịch đến khách sạn Kingly Hotel (số 8 Lý Thái Tổ, Hoàn Kiếm) 10h40 sáng 15/3/2020, lưu trú đến 18h ngày 16/3/2020 ",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-167",
        "address": "Khách sạn Sunshine 3, số 10 Võ Thị Sáu, phố Hội, TP Huế",
        "lat": 16.469674,
        "lng": 107.596185,
        "patientGroup": "F0",
        "note": "Đi từ Khách sạn Kingly Hotel (số 8 Lý Thái Tổ, Hoàn Kiếm) lúc 18h ngày 16/3/2020 bằng xe giường nằm tới khách sạn Sunshine 3 (số 10 Võ Thị Sáu, phố Hội, TP Huế) lúc 6h ngày 17/3/2020, lưu trú đến 8h 19/3/2020",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-167",
        "address": "Khách sạn Backpacker 250 Cửa Đại, Hội An",
        "lat": 15.888968,
        "lng": 108.353493,
        "patientGroup": "F0",
        "note": "Đi từ Khách sạn Sunshine 3 (số 10 Võ Thị Sáu, phố Hội, TP Huế) ngày 19/3/2020 8h sáng bằng xe du lịch tới khách sạn Backpacker 250 Cửa Đại, Hội An 10h30 sáng ngày 19/3/2020, lưu trú đến ngày 23/03/2020 5h30 ",
        "verifyDate": "2020-03-19T00:00:00"
    }, {
        "name": "BN-167",
        "address": "Sân bay quốc tế Đà Nẵng",
        "lat": 16.056347,
        "lng": 108.200863,
        "patientGroup": "F0",
        "note": "Từ khách sạn Backpacker 250 Cửa Đại, Hội An sáng 23/3/2020 bằng taxi tới sân bay Quốc tế Đà Nẵng sáng 23/3/2020 7h50 ",
        "verifyDate": "2020-03-23T00:00:00"
    }, {
        "name": "BN-167",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Quốc tế Đà Nẵng ngày 23/03/2020 7h50 bằng máy bay VJ530 tới sân bay Quốc tế Nội Bài ngày 23/03/2020 9h10",
        "verifyDate": "2015-03-23T00:00:00"
    }, {
        "name": "BN-167",
        "address": "khách sạn Kingly Hotel, số 8 Lý Thái Tổ, Hoàn Kiếm, Hà Nội",
        "lat": 21.03117,
        "lng": 105.854571,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Nội Bài ngày 23/3/2020 9h10 đến khách sạn Kingly Hotel (số 8 Lý Thái Tổ, Hoàn Kiếm) ngày 23/3/2020 9h50, lưu trú tại khách sạn đến 24/3/2020 ",
        "verifyDate": "2020-03-23T00:00:00"
    }, {
        "name": "BN-167",
        "address": "Cửa hàng McDonald số 2 Hàng Hải, Tràng Tiền, Hoàn Kiếm",
        "lat": 21.025396,
        "lng": 105.853065,
        "patientGroup": "F0",
        "note": "Đi từ khách sạn Kingly Hotel (số 8 Lý Thái Tổ, Hoàn Kiếm) đến ăn sáng ở cửa hàng McDonald số 2 Hàng Hải, Tràng Tiền, Hoàn Kiếm sáng 24/3/2020",
        "verifyDate": "2020-03-24T00:00:00"
    }, {
        "name": "BN-167",
        "address": "Circle K, 73 Chùa Láng, Hà Nội",
        "lat": 21.023107,
        "lng": 105.807053,
        "patientGroup": "F0",
        "note": "Đến Circle K 73 Chùa Láng từ 11h đến 15h ngày 24/3/2020",
        "verifyDate": "2020-03-24T00:00:00"
    }, {
        "name": "BN-160",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.81686,
        "lng": 106.653533,
        "patientGroup": "F0",
        "note": "22/03/2020 đi từ sân bay quốc tế Sheremetyevo, Mát-xco-va, Nga trên chuyến bay mã hiệu SU292\r\nvề Sân bay Tân Sơn Nhất, TP HCM",
        "verifyDate": "2020-02-22T00:00:00"
    }, {
        "name": "BN-86, BN-87, BN-133, BN-161, BN-162, BN-163, BN-168, BN-169, BN-170, BN-172, BN-174, BN-175, BN-176, BN-177, BN-178, BN-184, BN-185, NB-188, BN-189, BN-190, BN-191, BN-192, BN-193, BN-194, BN-195, BN-196, BN-197, BN-198, BN-199, BN-200, BN-201, BN-202, BN-205, BN-208, BN-215, BN-219, BN-223, BN-227, BN-232, BN-239",
        "address": "Bệnh Viện Bạch Mai, Hà Nội",
        "lat": 21.002114,
        "lng": 105.83922,
        "patientGroup": "F0",
        "note": "11/03/2020 - 25/03/2020 Trung tâm BV Bệnh Nhiệt đới, Viện Tim mạch, Khoa Thần Kinh, Khoa Tiêu hoá, Tổ nước sôi, Tổ nhà ăn, Tổ vệ sinh (Bệnh Viện Bạch Mai)",
        "verifyDate": "2020-03-11T00:00:00"
    }, {
        "name": "BN-170",
        "address": "Bến xe Giáp Bát",
        "lat": 20.980422,
        "lng": 105.841523,
        "patientGroup": "F0",
        "note": "Đến bến xe Giáp Bát lúc 9h sáng 15/3/2020, bắt xe khách Đức Long đi về Ninh Bình từ 9h-12h30",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-170",
        "address": "Bến xe Giáp Bát",
        "lat": 20.980422,
        "lng": 105.841523,
        "patientGroup": "F0",
        "note": "Đến Bến xe Giáp Bát 9h sáng 22/3/2020, bắt xe khách Đức Long về Ninh Bình lúc 12h30 ngày 22/3/2020 ",
        "verifyDate": "2020-03-22T00:00:00"
    }, {
        "name": "BN-179",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ sân bay Quốc tế Dubai, UAE từ ngày 18/3/2020 lúc 3h40 bằng chuyến bay EK394 tới sân bay Nội Bài, Hà Nội ngày 18/3/2020 lúc 12h40",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-173, BN-218, BN-225",
        "address": "Sân bay Nội Bài",
        "lat": 21.21869,
        "lng": 105.804632,
        "patientGroup": "F0",
        "note": "Đi từ sân bay Sheremetyevo, Moscow, Nga ngày 24/3/2020 20h10 trên chuyến bay SU290 tới Sân bay Nội Bài ngày 25/3/2020 08h43 ",
        "verifyDate": "2020-03-25T00:00:00"
    }, {
        "name": "BN-179",
        "address": "Sân bay Nội Bài",
        "lat": 21.21869,
        "lng": 105.804632,
        "patientGroup": "F0",
        "note": " Đi từ Sân bay Dubai, UAE ngày 18/3/2020 lúc 3h30 trên chuyến bay EK394 tới sân bay Nội Bài, Hà Nội ngày 18/3/2020 lúc 12h40. Sau khi xuống sân bay đã cách ly.",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-180, BN-181",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay quốc tế Suvarnabhumi ngày 20/3/2020 6h trên chuyến bay TG564 tới sân bay Nội Bài, Hà Nội ngày 20/3/2020 7h30. Cách ly sau khi nhập cảnh.",
        "verifyDate": "2020-03-20T00:00:00"
    }, {
        "name": "BN-182",
        "address": "Sân bay Nội Bài",
        "lat": 21.21869,
        "lng": 105.804632,
        "patientGroup": "F0",
        "note": "Đi từ Zurich, Thụy Sĩ trên chuyến bay LX180 tới Sân bay quốc tế Suvarnabhumi, Bangkok, Thái Lan; sau đó bắt chuyến bay VN618 từ 20/3/2020 19:00 tới sân bay Nội Bài 20/3/2020 21:00.  ",
        "verifyDate": "0001-01-01T00:00:00"
    }, {
        "name": "BN-171",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815654,
        "lng": 106.664386,
        "patientGroup": "F0",
        "note": "Đi từ Mỹ quá cảnh tại Philippines đến Sân bay Tân Sơn Nhất ngày 13/3/2020. Đã cách ly tại nhà sau khi nhập cảnh.",
        "verifyDate": "2015-03-13T00:00:00"
    }, {
        "name": "BN-203",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.815655,
        "lng": 106.664387,
        "patientGroup": "F0",
        "note": "Đi từ Hy Lạp quá cảnh qua Sân bay Istabul, Thổ Nhĩ Kỳ, bay về Sân bay Tân Sơn Nhất ngày 17/3/2020 trên chuyến bay TK162, đã cách ly sau khi nhập cảnh\t",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-212, BN-226, BN-231, BN-233",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ sân bay Sheremetyevo ngày 26/03/2020 trên chuyến bay SU290 đến Sân bay Nội Bài ngày 27/03/2020, đã cách ly sau khi xuống máy bay.",
        "verifyDate": "2020-03-27T00:00:00"
    }, {
        "name": "BN-211",
        "address": "Sân bay Nội Bài",
        "lat": 21.218715,
        "lng": 105.8019824,
        "patientGroup": "F0",
        "note": "Đi từ Washington, Mỹ quá cảnh tại Aby Dhabi và Bangkok, đến Sân bay Nội Bài ngày 20/03/2020 trên chuyến bay VN418.",
        "verifyDate": "2020-03-20T00:00:00"
    }, {
        "name": "BN-210",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ Thailand về Sân bay Nội Bài ngày 20/3/2020, đã cách ly ngay sau khi xuống sân bay. Trước đó có tiếp xúc gần với BN-201",
        "verifyDate": "2020-03-20T00:00:00"
    }, {
        "name": "BN-216",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187146,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi Đức quá cảnh qua Mát-xco-va đến Sân bay Nội Bài trên chuyến bay SU290 ngày 23/3/2020, sau đó được cách ly.",
        "verifyDate": "2020-04-02T00:00:00"
    }, {
        "name": "BN-217",
        "address": "Sân bay Nội Bài",
        "lat": 21.2187149,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Narita, Tokyo, Nhật Bản trên chuyến bay NH857 tới Sân bay Nội Bài ngày 25/03/2020",
        "verifyDate": "2020-04-02T00:00:00"
    }, {
        "name": "BN-222",
        "address": "Sân bay Nội Bài",
        "lat": 21.218715,
        "lng": 105.8019822,
        "patientGroup": "F0",
        "note": "Đi từ Mỹ quá cảnh qua sân bay Narita, Tokyo, Nhật Bản tới sân bay Nội Bài ngày 20/03/2020 trên chuyến bay JL571",
        "verifyDate": "2020-04-02T00:00:00"
    }, {
        "name": "BN-224",
        "address": "Chung cư  Masteri, Quận 2, TP Hồ Chí Minh",
        "lat": 10.802645,
        "lng": 106.741434,
        "patientGroup": "F0",
        "note": "Lưu trú tại Chung cư  Masteri, Quận 2, TP Hồ Chí Minh",
        "verifyDate": "2020-04-02T00:00:00"
    }, {
        "name": "BN-219",
        "address": "Thôn Chí Trung, xã Tân Quang, huyện Văn Lâm, Hưng Yên",
        "lat": 20.987149,
        "lng": 105.963786,
        "patientGroup": "F0",
        "note": "Lưu trú tại Thôn Chí Trung, xã Tân Quang, huyện Văn Lâm, Hưng Yên",
        "verifyDate": "2020-04-02T00:00:00"
    }, {
        "name": "BN-209",
        "address": "Đức Giang, Thượng Thanh, Long Biên, Hà Nội, Việt Nam",
        "lat": 21.06674,
        "lng": 105.883653,
        "patientGroup": "F0",
        "note": "Đức Giang, Thượng Thanh, Long Biên, Hà Nội, Việt Nam",
        "verifyDate": "2020-04-02T00:00:00"
    }, {
        "name": "BN-178",
        "address": "Đại Từ, Thái Nguyên",
        "lat": 21.602512,
        "lng": 105.644728,
        "patientGroup": "F0",
        "note": "Đại Từ, Thái Nguyên",
        "verifyDate": "2020-03-28T00:00:00"
    }, {
        "name": "BN-239",
        "address": "An Hoà, Tam Dương, Vĩnh Phúc",
        "lat": 21.376118,
        "lng": 105.524821,
        "patientGroup": "F0",
        "note": "Ngày 11 và 18/3 đi khám, điều trị tại Khoa Ung bướu, Bệnh viện Bạch Mai và có mua đồ ăn ở căng tin bệnh viện",
        "verifyDate": "2020-04-03T00:00:00"
    }, {
        "name": "BN-238",
        "address": "Cửa khẩu quốc tế Cha Lo, Quảng Bình",
        "lat": 17.679802,
        "lng": 105.765292,
        "patientGroup": "F0",
        "note": "Ngày 17-3, bệnh nhân đi ô tô từ Bangkok, Thái Lan về Việt Nam. Ngày 18-3, nhập cảnh qua cửa khẩu Cha Lo, tỉnh Quảng Bình và được đưa về khu cách ly tập trung của tỉnh Quảng Bình một ngày.",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-237",
        "address": "Khách sạn Ngọc Anh, cơ sở 2 – 38 Lương Văn Tuy, Ninh Bình",
        "lat": 20.256899,
        "lng": 105.970998,
        "patientGroup": "F0",
        "note": "Từ ngày 11/3 - 21/3/2020, BN 237 ở khách sạn Ngọc Anh, cơ sở 2 – 38 Lương Văn Tuy, Ninh Bình",
        "verifyDate": "2020-03-11T00:00:00"
    }, {
        "name": "BN-237",
        "address": "X.E.Limousine từ Ninh Bình lên Hà Nội",
        "lat": 20.350575,
        "lng": 105.923314,
        "patientGroup": "F0",
        "note": "Ngày 21/3/2020, bệnh nhân này đi xe X.E.Limousine từ Ninh Bình (09h30 sáng) lên Hà Nội",
        "verifyDate": "2020-03-21T00:00:00"
    }, {
        "name": "BN-237",
        "address": "Khách sạn Canary Hanoi, số 4 Vũ Hữu Lợi, Hà Nội",
        "lat": 21.019458,
        "lng": 105.841957,
        "patientGroup": "F0",
        "note": "Ngày 21/3 - 22/3/2020, bệnh nhân ở Khách sạn Canary Hanoi, số 4 Vũ Hữu Lợi, Hà Nội",
        "verifyDate": "2020-03-22T00:00:00"
    }, {
        "name": "BN-237",
        "address": "Khách sạn Sao (Star), số 2, ngõ 25, Lâm Du, Bồ Đề, Long Biên",
        "lat": 21.039089,
        "lng": 105.867898,
        "patientGroup": "F0",
        "note": "Ngày 22/3- 31/3/2020, bệnh nhân ở Khách sạn Sao (Star), số 2, ngõ 25, Lâm Du, Bồ Đề, Long Biên.",
        "verifyDate": "2020-03-31T00:00:00"
    }, {
        "name": "BN-237",
        "address": "Bệnh viện Việt Pháp, Phương Mai, Đống Đa, Hà Nội",
        "lat": 21.003708,
        "lng": 105.840344,
        "patientGroup": "F0",
        "note": "Ngày 30/03/2020, khám lại tại Bệnh viện, Việt Pháp",
        "verifyDate": "2020-03-30T00:00:00"
    }, {
        "name": "BN-237",
        "address": "Duc Giang General Hospital, Trường Lâm, Ô Cách, Đức Giang, Long Biên, Hà Nội",
        "lat": 21.062172,
        "lng": 105.898502,
        "patientGroup": "F0",
        "note": "Ngày 01/04/2020, bệnh nhân cấp cứu tại bệnh viện Đức Giang sau đó chuyển sang Viện huyết học – truyền máu Trung ương.",
        "verifyDate": "2020-04-01T00:00:00"
    }, {
        "name": "BN-234",
        "address": "Sân bay Tân Sơn Nhất, Hồ Chí Minh",
        "lat": 10.817715,
        "lng": 106.659114,
        "patientGroup": "F0",
        "note": "Đi từ Sân bay Charles de Gaulle, Pháp từ 16/3/2020 bằng chuyến bay VN2106 tới Sân bay Tân Sơn Nhất, Hồ Chí Minh ngày 17/3/2020, sau khi nhập cảnh đã cách ly.",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-238",
        "address": "Sân bay Nội Bài",
        "lat": 21.218715,
        "lng": 105.8019823,
        "patientGroup": "F0",
        "note": "Đi từ Bangkok, Thái Lan ngày 21/3/2020 tới Sân bay Nội Bài, Hà Nội ngày 21/3/2020, sau khi nhập cảnh đã cách ly.\t",
        "verifyDate": "2020-03-21T00:00:00"
    }, {
        "name": "BN-240",
        "address": "Sân bay Nội Bài",
        "lat": 21.218445,
        "lng": 105.80482,
        "patientGroup": "F0",
        "note": "Đi từ Bangkok, Thái Lan tới Sân bay Nội Bài, Hà Nội ngày 20/3/2020, sau khi nhập cảnh đã cách ly",
        "verifyDate": "2020-03-20T00:00:00"
    }, {
        "name": "BN-183",
        "address": "Phòng khám Đông y Mộc Linh, 182 Ngọc Hà, Ba Đình, Hà Nội",
        "lat": 21.038805,
        "lng": 105.828807,
        "patientGroup": "F0",
        "note": "Các ngày 17/3 (từ 8h-8h30); ngày 18/3 (từ 10h30-11h); ngày 22/3 (từ 12h-15h); ngày 23/3 (từ 15h30-16h30); ngày 24/3 (từ 12h-14h).",
        "verifyDate": "2020-03-17T00:00:00"
    }, {
        "name": "BN-183",
        "address": "Phòng khám Jc Caze, 5 Hàng Chuối, Hà Nội",
        "lat": 21.018218,
        "lng": 105.856926,
        "patientGroup": "F0",
        "note": "Phòng khám Jc Caze, 5 Hàng Chuối, Hà Nội, ngày 18/3 từ 13h30-14h; ngày 19/3 từ 10-11h30.",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-183",
        "address": "Trung tâm chăm sóc sức khỏe Hương Sen, 5 Lê Văn Thiêm, Thanh Xuân, Hà Nội",
        "lat": 21.00217,
        "lng": 105.802733,
        "patientGroup": "F0",
        "note": "Trung tâm chăm sóc sức khỏe Hương Sen, 5 Lê Văn Thiêm, Thanh Xuân, Hà Nội; từ 9h-10h30 ngày 18/3.",
        "verifyDate": "2020-03-18T00:00:00"
    }, {
        "name": "BN-183",
        "address": "Khách sạn Sheraton Nghi Tàm, 11 Xuân Diệu, Tây Hồ, Hà Nội",
        "lat": 21.059898,
        "lng": 105.831625,
        "patientGroup": "F0",
        "note": "Khách sạn Sheraton Nghi Tàm, 11 Xuân Diệu, Tây Hồ, Hà Nội, từ  9-12h ngày 20/3",
        "verifyDate": "2020-03-20T00:00:00"
    }, {
        "name": "BN-243",
        "address": "Hạ Lôi, Mê Linh, Hà Nội",
        "lat": 21.162101,
        "lng": 105.731461,
        "patientGroup": "F0",
        "note": "ở Hạ Lôi, Mê Linh, Hà Nội được phát hiện nhiễm nCoV sau khi thành phố rà soát người từng đi khám ở Bệnh viện Bạch Mai.",
        "verifyDate": "2020-04-06T00:00:00"
    }, {
        "name": "BN-241",
        "address": "Sân bay Cân Thơ",
        "lat": 10.07892,
        "lng": 105.712339,
        "patientGroup": "F0",
        "note": null,
        "verifyDate": "2020-03-22T00:00:00"
    }, {
        "name": "BN-242, BN-244, BN-245, BN-246",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.216444,
        "lng": 105.80229,
        "patientGroup": "F0",
        "note": "Ngày 25/3 từ Nga về Việt Nam trên chuyến bay SU290, ghế 23A, 40C, 30H, 49F nhập cảnh tại Nội Bài",
        "verifyDate": "2020-04-06T00:00:00"
    }, {
        "name": "BN-247",
        "address": "Phường 1, quận Bình Thạnh, TP.HCM",
        "lat": 10.798713,
        "lng": 106.696737,
        "patientGroup": "F0",
        "note": "BN247 - nam, ở phường 1, quận Bình Thạnh, TP.HCM, là đồng nghiệp, có tiếp xúc gần với BN124 và BN151",
        "verifyDate": "2020-04-07T00:00:00"
    }, {
        "name": "BN-248, BN-249 ",
        "address": "Sân bay Tân Sơn Nhất",
        "lat": 10.815633,
        "lng": 106.663159,
        "patientGroup": "F0",
        "note": "BN-248 từ Mỹ quá cảnh Nhật Bản về Việt Nam trên chuyến bay JL079 ngày 23/3 nhập cảnh tại Tân Sơn Nhất; BN249 - nam, 55 tuổi, quốc tịch Việt Nam, từ Mỹ quá cảnh tại Hồng Kông, nhập cảnh ngày 22/3, khởi phát bệnh tại Mỹ.",
        "verifyDate": "2020-04-12T00:00:00"
    }, {
        "name": "BN-250, BN-253, BN-254",
        "address": "Thôn Hạ Lôi, Mê Linh, Hà Nội",
        "lat": 21.154957,
        "lng": 105.740232,
        "patientGroup": "F0",
        "note": "Trú tại Hạ Lôi, Mê Linh, Hà Nội",
        "verifyDate": "2020-04-12T00:00:00"
    }, {
        "name": "BN-251",
        "address": "Bình Nghĩa, Bình Lục, Hà Nam",
        "lat": 20.56099,
        "lng": 106.015045,
        "patientGroup": "F0",
        "note": "BN251 - nam, 64 tuổi, trú tại Bình Nghĩa, Bình Lục, Hà Nam",
        "verifyDate": "2020-04-08T00:00:00"
    }, {
        "name": "BN-255",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.217257,
        "lng": 105.8008,
        "patientGroup": "F0",
        "note": "BN255 - nam, 29 tuổi, ở Bắc Quang, Hà Giang, ngày 27/3 từ Nga về Nội Bài trên chuyến bay SU290, được cách ly tập trung tại Vĩnh Phúc.",
        "verifyDate": "2020-04-10T00:00:00"
    }, {
        "name": "BN-256",
        "address": "Sân bay quốc tế Nội Bài, Hà Nội",
        "lat": 21.217702,
        "lng": 105.799912,
        "patientGroup": "F0",
        "note": "BN256: nam, 52 tuổi, quốc tịch Việt Nam, có địa chỉ ở Đình Dù, Văn Lâm, Hưng Yên. Ngày 27/3, bệnh nhân từ Nga về sân bay Nội Bài trên chuyến bay số hiệu SU290. Sau khi nhập cảnh, bệnh nhân được chuyển cách ly tập trung tại Trường Văn hóa Nghệ thuật tỉnh Vĩnh Phúc",
        "verifyDate": "2020-04-10T00:00:00"
    }, {
        "name": "BN-257, BN-258",
        "address": "xóm Hội, Hạ Lôi, Mê Linh, Hà Nội",
        "lat": 21.155957,
        "lng": 105.737657,
        "patientGroup": "F0",
        "note": "Trú tại xóm Hội, Hạ Lôi, Mê Linh, Hà Nội. ",
        "verifyDate": "2020-04-10T00:00:00"
    }, {
        "name": "BN-259",
        "address": "ở xóm Bàng, thôn Hạ Lôi, xã Mê Linh, huyện Mê Linh, Hà Nội",
        "lat": 21.154556,
        "lng": 105.740061,
        "patientGroup": "F0",
        "note": "ở xóm Bàng, thôn Hạ Lôi, xã Mê Linh, huyện Mê Linh, Hà Nội",
        "verifyDate": "2020-04-12T00:00:00"
    }, {
        "name": "BN-260",
        "address": "xóm Đường, thôn Hạ Lôi, Mê Linh, Hà Nội",
        "lat": 21.154637,
        "lng": 105.738044,
        "patientGroup": "F0",
        "note": "xóm Đường, thôn Hạ Lôi, Mê Linh, Hà Nội",
        "verifyDate": "2020-04-12T00:00:00"
    }, {
        "name": "BN-261",
        "address": "xóm Hội, Hạ Lôi, Mê Linh, Hà Nội",
        "lat": 21.160353,
        "lng": 105.735001,
        "patientGroup": "F0",
        "note": "trú tại xóm Hội, Hạ Lôi, Mê Linh, Hà Nội, bán tạp hoá tại chợ Hạ trong xóm Hội,",
        "verifyDate": "2020-04-12T00:00:00"
    }, {
        "name": "BN-262",
        "address": "xóm Chợ, Hạ Lôi, Mê Linh, Hà Nội",
        "lat": 21.161966,
        "lng": 105.736806,
        "patientGroup": "F0",
        "note": "trú tại xóm Chợ, Hạ Lôi, Mê Linh, Hà Nội",
        "verifyDate": "2020-04-12T00:00:00"
    }, {
        "name": "BN-263, BN-264 ",
        "address": "trú tại Hạ Lôi, Mê Linh, Hà Nội",
        "lat": 21.153165,
        "lng": 105.741972,
        "patientGroup": "F0",
        "note": "trú tại Hạ Lôi, Mê Linh, Hà Nội",
        "verifyDate": "2020-04-12T00:00:00"
    }, {
        "name": "BN-265",
        "address": "Cửa khẩu Cha Lo, Quảng Bình",
        "lat": 17.680544,
        "lng": 105.765374,
        "patientGroup": "F0",
        "note": "Ngày 23/3 từ Thái Lan nhập cảnh về Việt Nam qua cửa khẩu Cha Lo, Quảng Bình",
        "verifyDate": "2020-04-13T00:00:00"
    }, {
        "name": "BN-266",
        "address": "Thường Tín, Hà Nội",
        "lat": 20.850169,
        "lng": 105.879281,
        "patientGroup": "F0",
        "note": "trú tại Thường Tín, Hà Nội",
        "verifyDate": "2020-04-14T00:00:00"
    }, {
        "name": "BN-264",
        "address": "Lucky star – KĐT Tiền Phong, Mê Linh, Hà Nội",
        "lat": 21.144114,
        "lng": 105.764608,
        "patientGroup": "F0",
        "note": "Từ 15/3/2020, bệnh nhân thường xuyên đi tập gym tại phòng tập gym Lucky star – KĐT Tiền Phong; thường tập vào các ca 6h30 đến 8h00 và 15h00-16h30; ngày cuối cùng đi tập gym ngày 25/3/2020",
        "verifyDate": "2020-03-15T00:00:00"
    }, {
        "name": "BN-264",
        "address": "Công viên Nghĩa Đô, Cầu Giấy, Hà Nội",
        "lat": 21.040415,
        "lng": 105.796812,
        "patientGroup": "F0",
        "note": "Sáng ngày 25/3/2020, bệnh nhân cùng bạn đến công viên Nghĩa Đô - Cầu Giấy uống coffe từ 10h-10h20",
        "verifyDate": "2020-04-15T00:00:00"
    }, {
        "name": "BN-264",
        "address": "Vincom Trần Duy Hưng, Láng Thượng, Cầu Giấy, Hà Nội",
        "lat": 21.006456,
        "lng": 105.7951,
        "patientGroup": "F0",
        "note": "Đến Vincom Trần Duy Hưng ăn trưa từ 13h00-14h00",
        "verifyDate": "2020-04-15T00:00:00"
    }, {
        "name": "BN-267",
        "address": " xóm Hội, Hạ Lôi, Mê Linh, Hà Nội",
        "lat": 21.156856,
        "lng": 105.737507,
        "patientGroup": "F0",
        "note": " xóm Hội, Hạ Lôi, Mê Linh, Hà Nội",
        "verifyDate": "2020-04-08T00:00:00"
    }],
    "length": 0
}, {delay: 2000});

fetchMock.get('https://td.fpt.ai/corona/corona-chart-vn.json', {
    "Ngày 30/1": [
        2,
        18,
        0
    ],
    "Ngày 31/1": [
        5,
        32,
        0
    ],
    "Ngày 1/2": [
        6,
        27,
        0
    ],
    "Ngày 2/2": [
        7,
        73,
        1
    ],
    "Ngày 3/2": [
        8,
        73,
        2
    ],
    "Ngày 4/2": [
        10,
        90,
        3
    ],
    "Ngày 5/2": [
        10,
        78,
        3
    ],
    "Ngày 6/2": [
        12,
        77,
        3
    ],
    "Ngày 7/2": [
        13,
        90,
        3
    ],
    "Ngày 8/2": [
        13,
        90,
        3
    ],
    "Ngày 9/2": [
        14,
        83,
        3
    ],
    "Ngày 10/2": [
        14,
        82,
        6
    ],
    "Ngày 11/2": [
        15,
        64,
        6
    ],
    "Ngày 12/2": [
        15,
        97,
        7
    ],
    "Ngày 13/2": [
        16,
        82,
        7
    ],
    "Ngày 14/2": [
        16,
        61,
        7
    ],
    "Ngày 15/2": [
        16,
        61,
        7
    ],
    "Ngày 16/2": [
        16,
        61,
        7
    ],
    "Ngày 17/2": [
        16,
        61,
        13
    ],
    "Ngày 18/2": [
        16,
        61,
        13
    ],
    "Ngày 19/2": [
        16,
        34,
        13
    ],
    "Ngày 20/2": [
        16,
        23,
        15
    ],
    "Ngày 21/2": [
        16,
        28,
        15
    ],
    "Ngày 24/2": [
        16,
        28,
        15
    ],
    "Ngày 25/2": [
        16,
        1,
        15
    ],
    "Ngày 26/2": [
        16,
        92,
        16
    ],
    "Ngày 27/2": [
        16,
        92,
        16
    ],
    "Ngày 28/2": [
        16,
        79,
        16
    ],
    "Ngày 29/2": [
        16,
        105,
        16
    ],
    "Ngày 2/3": [
        16,
        115,
        16
    ],
    "Ngày 3/3": [
        16,
        75,
        16
    ],
    "Ngày 4/3": [
        16,
        77,
        16
    ],
    "Ngày 5/3": [
        16,
        92,
        16
    ],
    "Ngày 6/3": [
        30,
        100,
        16
    ],
    "Ngày 21/4": [
        268,
        402,
        216
    ],
    "Ngày 22/4": [
        268,
        386,
        223
    ],
    "Ngày 23/4": [
        268,
        371,
        224
    ],
    "Ngày 24/4": [
        268,
        416,
        225
    ],
    "Ngày 25/4": [
        270,
        419,
        225
    ],
    "Ngày 28/4": [
        270,
        431,
        222
    ]
});

fetchMock.get('https://td.fpt.ai/corona/corona-total.json', {
    "Dec 8": [
        1,
        0,
        null
    ],
    "Jan 24": [
        844,
        25,
        null
    ],
    "Jan 25": [
        1312,
        44,
        null
    ],
    "Jan 26": [
        2015,
        56,
        null
    ],
    "Jan 27": [
        2801,
        80,
        null
    ],
    "Jan 28": [
        4579,
        106,
        null
    ],
    "Jan 29": [
        6061,
        132,
        null
    ],
    "Jan 30": [
        7816,
        170,
        null
    ],
    "Jan 31": [
        9821,
        213,
        null
    ],
    "Feb 1": [
        11948,
        259,
        null
    ],
    "Feb 2": [
        14553,
        305,
        null
    ],
    "Feb 3": [
        17387,
        362,
        null
    ],
    "Feb 4": [
        20623,
        427,
        658
    ],
    "Feb 5": [
        24551,
        492,
        1039
    ],
    "Feb 6": [
        28276,
        566,
        1173
    ],
    "Feb 7": [
        31481,
        638,
        1563
    ],
    "Feb 8": [
        34879,
        720,
        2083
    ],
    "Feb 9": [
        37552,
        813,
        2685
    ],
    "Feb 10": [
        40553,
        910,
        3322
    ],
    "Feb 11": [
        43098,
        1018,
        4043
    ],
    "Feb 12": [
        45171,
        1115,
        4794
    ],
    "Feb 13": [
        60374,
        1369,
        6079
    ],
    "Feb 14": [
        64434,
        1383,
        6766
    ],
    "Feb 15": [
        69044,
        1666,
        9425
    ],
    "Feb 16": [
        71231,
        1770,
        10890
    ],
    "Feb 17": [
        73260,
        1868,
        12615
    ],
    "Feb 18": [
        75138,
        2007,
        14442
    ],
    "Feb 19": [
        75669,
        2122,
        16342
    ],
    "Feb 20": [
        76202,
        2247,
        18221
    ],
    "Feb 21": [
        77279,
        2251,
        18928
    ],
    "Feb 22": [
        78635,
        2459,
        22940
    ],
    "Feb 23": [
        78997,
        2470,
        23425
    ],
    "Feb 24": [
        79774,
        2629,
        25282
    ],
    "Feb 25": [
        80427,
        2712,
        27957
    ],
    "Feb 26": [
        81406,
        2771,
        30370
    ],
    "Feb 27": [
        82794,
        2817,
        33369
    ],
    "Feb 28": [
        84186,
        2876,
        36907
    ],
    "Feb 29": [
        86602,
        2977,
        42135
    ],
    "Mar 01": [
        88377,
        3001,
        42743
    ],
    "Mar 02": [
        90308,
        3087,
        45727
    ],
    "Mar 03": [
        92880,
        3168,
        48494
    ],
    "Mar 04": [
        95180,
        3254,
        51443
    ],
    "Mar 05": [
        98078,
        3356,
        54140
    ],
    "Mar 06": [
        101955,
        3466,
        56123
    ],
    "Mar 07": [
        105941,
        3569,
        58627
    ],
    "Mar 09": [
        114285,
        4009,
        62841
    ],
    "Mar 10": [
        118905,
        4270,
        65114
    ],
    "Mar 11": [
        126054,
        4616,
        67057
    ],
    "Mar 12": [
        134529,
        4970,
        68927
    ],
    "Mar 13": [
        145341,
        5416,
        70931
    ],
    "Mar 14": [
        156433,
        5821,
        74461
    ],
    "Mar 15": [
        169360,
        6501,
        76618
    ],
    "Mar 16": [
        182403,
        7144,
        78346
    ],
    "Mar 17": [
        198178,
        7965,
        81729
    ],
    "Mar 18": [
        218698,
        8943,
        84386
    ],
    "Mar 19": [
        244867,
        10030,
        87407
    ],
    "Mar 20": [
        275130,
        11376,
        90943
    ],
    "Mar 21": [
        304999,
        13003,
        94793
    ],
    "Mar 22": [
        336068,
        14613,
        97636
    ],
    "Mar 23": [
        378492,
        16495,
        101608
    ],
    "Mar 24": [
        420996,
        18802,
        108323
    ],
    "Mar 25": [
        468156,
        21180,
        113812
    ],
    "Mar 26": [
        529614,
        23976,
        123380
    ],
    "Mar 27": [
        594280,
        27250,
        132622
    ],
    "Mar 28": [
        662541,
        30839,
        141468
    ],
    "Mar 29": [
        721293,
        33944,
        151004
    ],
    "Mar 30": [
        783910,
        37775,
        165000
    ],
    "Mar 31": [
        856859,
        42096,
        177141
    ],
    "Apr 01": [
        934825,
        47187,
        193989
    ],
    "Apr 02": [
        1014296,
        52982,
        212018
    ],
    "Apr 03": [
        1097776,
        59140,
        228370
    ],
    "Apr 04": [
        1199583,
        64662,
        246174
    ],
    "Apr 05": [
        1224938,
        66502,
        253821
    ],
    "Apr 06": [
        1297704,
        71282,
        272819
    ],
    "Apr 07": [
        1425716,
        81968,
        301828
    ],
    "Apr 08": [
        1509678,
        88334,
        329674
    ],
    "Apr 09": [
        1601302,
        95630,
        355671
    ],
    "Apr 10": [
        1697212,
        102658,
        376106
    ],
    "Apr 11": [
        1777206,
        108742,
        402016
    ],
    "Apr 12": [
        1851487,
        114171,
        422823
    ],
    "Apr 13": [
        1923153,
        119585,
        443883
    ],
    "Apr 14": [
        1993677,
        126319,
        467214
    ],
    "Apr 15": [
        2077839,
        134375,
        509853
    ],
    "Apr 16": [
        2179905,
        145410,
        546743
    ],
    "Apr 17": [
        2248037,
        154126,
        570792
    ],
    "Apr 18": [
        2325417,
        160456,
        595519
    ],
    "Apr 19": [
        2404866,
        164925,
        624848
    ],
    "Apr 20": [
        2479343,
        170344,
        645806
    ],
    "Apr 21": [
        2553310,
        177289,
        688619
    ],
    "Apr 22": [
        2633064,
        183883,
        717284
    ],
    "Apr 23": [
        2714942,
        190395,
        744961
    ],
    "Apr 24": [
        2826673,
        196971,
        780139
    ],
    "Apr 25": [
        2917353,
        203111,
        834525
    ],
    "Apr 26": [
        2992639,
        206883,
        877254
    ],
    "Apr 27": [
        3059081,
        211202,
        919746
    ],
    "Apr 28": [
        3118393,
        216205,
        946925
    ]
});