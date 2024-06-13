import { resolvedSrc } from '@/utils'

export class CustomImage {
    src: string
    width?: number
    height?: number

    constructor(src: string, width: number, height: number) {
        const imageSrc = resolvedSrc(src)

        this.src = imageSrc ?? ''
        this.width = width
        this.height = height
    }

    toString() {
        return this.src
    }
}

export const badG = new CustomImage('@/imgs/badg.png', 607, 263)
export const cameraMap = new CustomImage('@/imgs/camera_map.png', 421, 408)
export const cargoMap = new CustomImage('@/imgs/cargo_map.jpg', 1462, 1036)
export const cargoPass = new CustomImage('@/imgs/cargo-pass.png', 567, 211)
export const carsharing = new CustomImage('@/imgs/carsharing.jpeg', 853, 612)
export const carsharingFull = new CustomImage('@public/imgs/carsharing-full.jpg', 400, 288)
export const coddDesc = new CustomImage('@/imgs/codd_desc.png', 67, 43)
export const coddLogo = new CustomImage('@/imgs/codd-logo.png', 66, 109)
export const electroMap = new CustomImage('@/imgs/electro_map.png', 825, 414)
export const empty = new CustomImage('@/imgs/empty.jpg', 640, 427)
export const evacuationCar = new CustomImage('@/imgs/evacuation_car.png', 328, 151)
export const group202TarifAll = new CustomImage('@/imgs/Group_202_tarif_all.png', 237, 191)
export const groupFareBus = new CustomImage('@/imgs/Group_fare_bus.png', 310, 257)
export const inosmi = new CustomImage('@/imgs/inosmi.jpg', 570, 700)
export const liksutov = new CustomImage('@/imgs/liksutov.png', 310, 278)
export const lostAndFound = new CustomImage('@/imgs/lostAndFound.png', 403, 319)
export const magistralCards2 = new CustomImage('@/imgs/magistral_cards2.png', 620, 612)
export const mapGruzovik = new CustomImage('@/imgs/map_gruzovik.png', 644, 479)
export const maskGroupPedestrian = new CustomImage('@/imgs/Mask-Group-pedestrian.jpg', 1030, 816)
export const mcd22x = new CustomImage('@/imgs/mcd22x.jpg', 800, 534)
export const metroLabelLogo = new CustomImage('@/imgs/metro-label-logo.png', 96, 97)
export const metroMap = new CustomImage('@/imgs/Metro-map.jpg', 3468, 1632)
export const mobile = new CustomImage('@/imgs/mobile.png', 882, 856)
export const moscowMap = new CustomImage('@/imgs/moscow_map.jpeg', 1299, 703)
export const parkingCar = new CustomImage('@/imgs/parking_car.png', 129, 91)
export const parkingIntercepting = new CustomImage('@/imgs/parking_intercepting.png', 127, 60)
export const parkingMap = new CustomImage('@/imgs/parking_map.jpeg', 1344, 783)
export const parkovki = new CustomImage('@/imgs/parkovki.png', 227, 402)
export const payFine = new CustomImage('@/imgs/payFine.png', 344, 424)
export const probki = new CustomImage('@/imgs/probki.jpg', 1328, 990)
export const repairsClosuresMetro = new CustomImage('@/imgs/repairs_closures_metro.png', 1680, 1119)
export const roadCoordinator = new CustomImage('@/imgs/road_coordinator.png', 175, 192)
export const schedule2x = new CustomImage('@/imgs/schedule2x.png', 2432, 1644)
export const taxiParking = new CustomImage('@/imgs/taxi_parking.png', 867, 408)
export const taxi = new CustomImage('@/imgs/taxi_x1.5.png', 501, 207)
export const ticketsNew = new CustomImage('@/imgs/tickets-new_2020-3-62x.png', 542, 708)
export const trafficJams = new CustomImage('@/imgs/traffic_jams.png', 563, 509)
export const trainRoutes = new CustomImage('@/imgs/train-routes.png', 257, 210)
export const troika2x = new CustomImage('@/imgs/Troika2x.png', 515, 491)
export const yellowTerminal = new CustomImage('@/imgs/yellowTerminal.png', 310, 360)
export const troikaCard = new CustomImage('@/imgs/troyka_retina.png', 755, 472)
export const cardEdiniy = new CustomImage('@/imgs/karta_ediniy.png', 443, 281)
export const cardTat = new CustomImage('@/imgs/karta_tat.png', 443, 281)
export const cardBus = new CustomImage('@/imgs/karta_avtobus.png', 443, 281)
export const IDR = new CustomImage('@/imgs/IDR_5400.jpg', 755, 450)
export const turniket = new CustomImage('@/imgs/turniket_1_retina.png', 310, 489)
export const cardMoscow = new CustomImage('@/imgs/card_moscow1.png', 443, 281)
export const cardMoscowSchool = new CustomImage('@/imgs/card_moscow2.png', 443, 281)
export const cardMoscowStudent = new CustomImage('@/imgs/card_moscow3.png', 443, 281)
export const mapPublicServices = new CustomImage('@/imgs/map_public-service.png', 311, 150)
export const mobileMT = new CustomImage('@/imgs/mobileMT.png', 310, 370)
export const mobileAppMetroMap = new CustomImage('@/imgs/mobileAppMetroMap.png', 644, 198)
export const aeroexpressLogo = new CustomImage('@/imgs/aeroexpressLogo.png', 148, 148)
export const helperMoscowLogo = new CustomImage('@/imgs/helperMoscowLogo.png', 148, 148)
export const veloBikeLogo = new CustomImage('@/imgs/veloBikeLogo.png', 148, 148)
export const yandexTaxiLogo = new CustomImage('@/imgs/yandexTaxiLogo.png', 72, 72)
export const cityMobilLogo = new CustomImage('@/imgs/cityMobilLogo.png', 72, 72)
export const uberLogo = new CustomImage('@/imgs/uberLogo.png', 72, 72)
export const yandexDriveLogo = new CustomImage('@/imgs/yandexDriveLogo.png', 72, 72)
export const belkaCarLogo = new CustomImage('@/imgs/belkaCarLogo.png', 72, 72)
export const cityDriveLogo = new CustomImage('@/imgs/cityDriveLogo.png', 72, 72)
export const delimobilLogo = new CustomImage('@/imgs/delimobilLogo.png', 72, 72)
export const mtLogo = new CustomImage('@/imgs/mtLogo.png', 323, 386)
export const metroLogo = new CustomImage('@/imgs/metroLogo.png', 36, 43)
export const parkingLogo = new CustomImage('@/imgs/parkingLogo.png', 36, 43)
export const bigLogoMT = new CustomImage('@/imgs/bigLogoMT.png', 326, 386)
export const mobileAppMetroMapMobile = new CustomImage('@/imgs/mobileAppMetroMapMobile.png', 288, 232)
export const parkingVector = new CustomImage('@/imgs/parkingVector.png', 210, 290)
export const finesInfo = new CustomImage('@/imgs/fines_info.png', 867, 270)
export const wifiLogo = new CustomImage('@/imgs/wifiLogo.png', 84, 62)
export const roadAccidentFirst = new CustomImage('@/imgs/road_accident-1.png', 755, 755)
export const roadAccidentSecond = new CustomImage('@/imgs/road_accident-2.png', 755, 1018)
export const roadAccidentThird = new CustomImage('@/imgs/road_accident-3.png', 755, 1018)
export const exampleOfNotice = new CustomImage('@/imgs/example_of_notice.png', 310, 412)
export const interactiveСarriage = new CustomImage('@/imgs/interactiveСarriage.jpg', 515, 337)
export const interactiveDriverCabin = new CustomImage('@/imgs/interactiveDriverCabin.jpg', 515, 337)
export const interactiveBus = new CustomImage('@/imgs/interactiveBus.jpg', 446, 289)
export const interactiveBusFront = new CustomImage('@/imgs/interactiveBusFront.jpg', 446, 289)
export const interactiveBusFrontWithPassenger = new CustomImage('@/imgs/interactiveBusFrontWithPassenger.jpg', 332, 215)
export const childrenBikeBack = new CustomImage('@/imgs/childrenBikeBack.jpg', 515, 916)
export const childrenBike = new CustomImage('@/imgs/childrenBike.jpg', 515, 916)
export const parkingMeterFront = new CustomImage('@/imgs/parkingMeterFront.jpg', 515, 916)
export const parkingMeter = new CustomImage('@/imgs/parkingMeter.jpg', 515, 916)
export const interactiveTrain = new CustomImage('@/imgs/interactiveTrain.jpg', 515, 386)
export const interactiveTrainFront = new CustomImage('@/imgs/interactiveTrainFront.jpg', 515, 385)
export const busStop = new CustomImage('@/imgs/busStop.jpg', 332, 270)
export const busStopFront = new CustomImage('@/imgs/busStopFront.jpg', 332, 270)
export const motorTown = new CustomImage('@/imgs/motorTown.jpg', 332, 270)
export const phone = new CustomImage('@/imgs/phone.png', 48, 48)
export const freeMusic = new CustomImage('@/imgs/freeMusic.png', 310, 428)
export const musicPlace = new CustomImage('@/imgs/musicPlace.png', 755, 450)
export const worldTransportDevelopment = new CustomImage('@/imgs/worldTransportDevelopment.jpg', 300, 401)
export const parisTransportStrategy = new CustomImage('@/imgs/parisTransportStrategy.jpg', 297, 361)
export const singaporeTransportStrategy = new CustomImage('@/imgs/singaporeTransportStrategy.jpg', 297, 361)
export const londonTransportStrategy = new CustomImage('@/imgs/londonTransportStrategy.jpg', 297, 361)
export const hongKongTransportStrategy = new CustomImage('@/imgs/hongKongTransportStrategy.jpg', 297, 361)
export const newYorkTransportStrategy = new CustomImage('@/imgs/newYorkTransportStrategy.jpg', 297, 361)
export const parisTransportStrategySecond = new CustomImage('@/imgs/parisTransportStrategySecond.jpg', 297, 361)
export const madridTransportStrategy = new CustomImage('@/imgs/madridTransportStrategy.jpg', 297, 361)
export const madridTransportStrategySecond = new CustomImage('@/imgs/madridTransportStrategySecond.jpg', 297, 361)
export const stockholmTransportStrategy = new CustomImage('@/imgs/stockholmTransportStrategy.jpg', 297, 361)
export const serviceCenterEntrance = new CustomImage('@/imgs/serviceCenterEntrance.jpg', 1000, 666)
export const serviceCenterQueue = new CustomImage('@/imgs/serviceCenterQueue.jpg', 1000, 666)
export const serviceCenterKidsArea = new CustomImage('@/imgs/serviceCenterKidsArea.jpg', 1000, 666)
export const museum = new CustomImage('@/imgs/museum.jpg', 755, 450)

export const cityTransport = new CustomImage('@/imgs/cityTransport.png', 600, 380)
export const moscowTransportSystem = new CustomImage('@/imgs/moscowTransportSystem.png', 600, 380)
export const developmentTransportSystem = new CustomImage('@/imgs/developmentTransportSystem.png', 600, 380)
export const digitalTransformation = new CustomImage('@/imgs/digitalTransformation.png', 600, 380)
export const loyaltyProgram = new CustomImage('@/imgs/loyaltyProgram.png', 600, 380)
export const newModelMobility = new CustomImage('@/imgs/newModelMobility.png', 600, 380)
export const developmentTransportInfrastructure = new CustomImage(
    '@/imgs/developmentTransportInfrastructure.png',
    600,
    380
)
export const newModelMobility2 = new CustomImage('@/imgs/newModelMobility2.png', 600, 380)
export const innovativeMobility = new CustomImage('@/imgs/InnovativeMobility.png', 600, 380)
export const trafficSafety = new CustomImage('@/imgs/trafficSafety.png', 600, 380)
export const modelTransportBehavior = new CustomImage('@/imgs/modelTransportBehavior.png', 600, 380)
export const transportDevelopmentProgram = new CustomImage('@/imgs/transportDevelopmentProgram.png', 600, 380)
export const taxiTransportation2020 = new CustomImage('@/imgs/taxiTransportation2020.jpg', 600, 380)
export const mcdOpening = new CustomImage('@/imgs/mcdOpening.jpg', 600, 380)
export const taxiTransportation2011to2017 = new CustomImage('@/imgs/taxiTransportation2011to2017.jpg', 600, 380)
export const taxiTransportation2017 = new CustomImage('@/imgs/taxiTransportation2017.jpg', 600, 380)
export const carSharing = new CustomImage('@/imgs/carSharing.jpg', 600, 380)
export const bikeSpaceDevelopment = new CustomImage('@/imgs/bikeSpaceDevelopment.jpg', 600, 380)
export const paidParking = new CustomImage('@/imgs/paidParking.jpg', 600, 380)
export const ngptDevelopment = new CustomImage('@/imgs/ngptDevelopment.jpg', 600, 380)
export const parkingSpaceDevelopment = new CustomImage('@/imgs/parkingSpaceDevelopment.jpg', 600, 380)

export const transportComplex2022 = new CustomImage('@/imgs/transportComplex2022.jpg', 600, 380)
export const transportComplex2021 = new CustomImage('@/imgs/transportComplex2021.jpg', 600, 380)
export const transportComplex2022SixMonth = new CustomImage('@/imgs/transportComplex2022SixMonth.jpg', 600, 380)
export const transportComplex2021To2022 = new CustomImage('@/imgs/transportComplex2021To2022.jpg', 600, 380)
export const transportComplex2020To2021 = new CustomImage('@/imgs/transportComplex2020To2021.jpg', 600, 380)
export const transportComplex2010To2019 = new CustomImage('@/imgs/transportComplex2010To2019.jpg', 600, 380)
export const transportComplex2019 = new CustomImage('@/imgs/transportComplex2019.jpg', 600, 380)
export const transportComplex2018 = new CustomImage('@/imgs/transportComplex2018.jpg', 600, 380)
export const transportComplex2017 = new CustomImage('@/imgs/transportComplex2017.jpg', 600, 380)
export const transportComplex2010To2016 = new CustomImage('@/imgs/transportComplex2010To2016.jpg', 600, 380)
export const transportComplex2016 = new CustomImage('@/imgs/transportComplex2016.jpg', 600, 380)

export const berlinInternationalSummit = new CustomImage('@/imgs/berlinInternationalSummit.jpg', 310, 200)
export const buenosAirosInternationalSummit = new CustomImage('@/imgs/buenosAirosInternationalSummit.png', 310, 200)
export const daimlerInternationalSummit = new CustomImage('@/imgs/daimlerInternationalSummit.png', 310, 200)
export const yandexTaxiInternationalSummit = new CustomImage('@/imgs/yandexTaxiInternationalSummit.png', 310, 200)
export const amsterdamInternationalSummit = new CustomImage('@/imgs/amsterdamInternationalSummit.png', 310, 200)
export const madridInternationalSummit = new CustomImage('@/imgs/madridInternationalSummit.png', 310, 200)
export const singapurInternationalSummit = new CustomImage('@/imgs/singapurInternationalSummit.png', 310, 200)
export const InternationalSummit1 = new CustomImage('@/imgs/InternationalSummit1.png', 755, 450)
export const InternationalSummit2 = new CustomImage('@/imgs/InternationalSummit2.png', 235, 200)
export const InternationalSummit3 = new CustomImage('@/imgs/InternationalSummit3.png', 235, 200)
export const InternationalSummit4 = new CustomImage('@/imgs/InternationalSummit4.png', 235, 200)
export const InternationalSummit5 = new CustomImage('@/imgs/InternationalSummit5.png', 420, 200)
export const InternationalSummit6 = new CustomImage('@/imgs/InternationalSummit6.png', 310, 200)
export const InternationalSummit7 = new CustomImage('@/imgs/InternationalSummit7.png', 755, 450)
export const InternationalSummit8 = new CustomImage('@/imgs/InternationalSummit8.png', 235, 200)
export const InternationalSummit9 = new CustomImage('@/imgs/InternationalSummit9.png', 235, 200)
export const InternationalSummit10 = new CustomImage('@/imgs/InternationalSummit10.png', 235, 200)
export const InternationalSummit11 = new CustomImage('@/imgs/InternationalSummit11.png', 420, 200)
export const InternationalSummit12 = new CustomImage('@/imgs/InternationalSummit12.png', 310, 200)
export const InternationalSummit13 = new CustomImage('@/imgs/InternationalSummit13.png', 755, 450)
export const InternationalSummit14 = new CustomImage('@/imgs/InternationalSummit14.png', 235, 200)
export const InternationalSummit15 = new CustomImage('@/imgs/InternationalSummit15.png', 235, 200)
export const InternationalSummit16 = new CustomImage('@/imgs/InternationalSummit16.png', 235, 200)
export const InternationalSummit17 = new CustomImage('@/imgs/InternationalSummit17.png', 420, 200)
export const InternationalSummit18 = new CustomImage('@/imgs/InternationalSummit18.png', 310, 200)
export const InternationalSummit19 = new CustomImage('@/imgs/InternationalSummit19.png', 755, 450)
export const magistralBusStation = new CustomImage('@public/imgs/magistralBusStation.png', 1200, 800)
export const bolshoyTheatreStation = new CustomImage('@public/imgs/bolshoyTheatreStation.png', 1200, 800)
export const maksimLiksutov = new CustomImage('@public/imgs/maksimLiksutov.jpg', 739, 1000)
export const romanLatypov = new CustomImage('@public/imgs/romanLatypov.jpg', 300, 300)
export const elenaKudryashova = new CustomImage('@public/imgs/elenaKudryashova.jpg', 900, 900)
export const oksanaVorobyova = new CustomImage('@public/imgs/oksanaVorobyova.jpg', 900, 900)
export const ibragimGaziev = new CustomImage('@public/imgs/ibragimGaziev.jpg', 80, 80)
export const hamidBulatov = new CustomImage('@public/imgs/hamidBulatov.jpg', 300, 300)
export const alexeyKostromin = new CustomImage('@public/imgs/alexeyKostromin.jpg', 900, 900)
export const harutyunOganesyan = new CustomImage('@public/imgs/harutyunOganesyan.jpg', 900, 900)
export const igorKrasnozhen = new CustomImage('@public/imgs/igorKrasnozhen.jpg', 467, 467)
export const andreyKorneev = new CustomImage('@public/imgs/andreyKorneev.jpg', 300, 300)
export const olegZaitsev = new CustomImage('@public/imgs/olegZaitsev.jpg', 900, 900)
export const pavelMikhailov = new CustomImage('@public/imgs/pavelMikhailov.jpg', 900, 900)
export const alexanderGarakoev = new CustomImage('@public/imgs/alexanderGarakoev.jpg', 300, 300)
export const valeryGrudev = new CustomImage('@public/imgs/valeryGrudev.jpg', 109, 109)
export const khasyanProkurorov = new CustomImage('@public/imgs/khasyanProkurorov.jpg', 900, 900)
export const denisFalin = new CustomImage('@public/imgs/denisFalin.jpg', 467, 467)
export const alexeyMityaev = new CustomImage('@public/imgs/alexeyMityaev.jpg', 300, 300)
export const vladimirMakarov = new CustomImage('@public/imgs/vladimirMakarov.jpg', 300, 300)
export const sergeyAlexyuk = new CustomImage('@public/imgs/sergeyAlexyuk.jpg', 600, 600)
export const dmitrySokolov = new CustomImage('@public/imgs/dmitrySokolov.jpg', 600, 600)
export const dmitryPronin = new CustomImage('@public/imgs/dmitryPronin.jpg', 300, 300)
export const yuliaTemnikova = new CustomImage('@public/imgs/yuliaTemnikova.jpg', 300, 300)
export const irinaYefimova = new CustomImage('@public/imgs/irinaYefimova.jpg', 858, 858)
export const anastasiaShaliapina = new CustomImage('@public/imgs/anastasiaShaliapina.jpg', 900, 900)
export const andreyBabarykin = new CustomImage('@public/imgs/andreyBabarykin.jpg', 134, 134)

export const nightRoutes = new CustomImage('@public/imgs/nightRoutes.png', 3072, 4096)
export const behaviorIfFire = new CustomImage('@public/imgs/f005587ed69f078c74df0653e17b1eb9.png', 587, 824)
export const behaviorIfFireInVagon = new CustomImage('@public/imgs/6debc2a43468dd7ed94180a28069a814.png', 587, 824)
export const behaviorIfFallWithoutTrain = new CustomImage('@public/imgs/7d1ef1c4d1d49d774fe49b52d6e48f13.png', 587, 824)
export const behaviorIfFallWithTrain = new CustomImage('@public/imgs/4d791c2ae322f319bfd4e50e7dae3f40.png', 587, 824)
export const behaviorIfVandalism = new CustomImage('@public/imgs/8032c04c59d708b3046a80d777aea4cd.png', 587, 824)
export const behaviorIfNeedHelpInVagon = new CustomImage('@public/imgs/72c4cf7a7e8d74b93008bdfa29647f78.png', 587, 824)
export const behaviorIfNeedHelpAtStation = new CustomImage(
    '@public/imgs/20fadc957efd5a1f4e74f8d7f1aa8106.png',
    587,
    824
)
export const behaviorIfEscalator = new CustomImage('@public/imgs/fa345d51faa4a7df27fbc2f08b22c823.png', 587, 824)

// /transport/marshruty/helping_businesses_and_citizens
export const moscowCarsharing = new CustomImage('@public/imgs/moscowCarsharing.png', 310, 190)
export const avia = new CustomImage('@public/imgs/avia.png', 190, 75)
export const trucks = new CustomImage('@public/imgs/trucks.png', 270, 126)
export const makeSuggestions = new CustomImage('@public/imgs/makeSuggestions.png', 270, 59)

// TODO: не переносить эти картинки, они удалятся, когда с бека будем получать картинки для Фотобанка
export const photobank1Image1 = new CustomImage('@public/imgs/gallery/sc_1502x1000__MG_3201.jpg', 1248, 830)
export const photobank1Image2 = new CustomImage('@public/imgs/gallery/sc_1502x1000__MG_3226.jpg', 1248, 830)
export const photobank1Image3 = new CustomImage('@public/imgs/gallery/sc_1502x1000__MG_3435.jpg', 1248, 830)
export const photobank1Image4 = new CustomImage('@public/imgs/gallery/sc_1502x1000__MG_3530.jpg', 1248, 830)
export const photobank1Image5 = new CustomImage('@public/imgs/gallery/sc_1502x1000__MG_3575.jpg', 1248, 830)
export const photobank1Image6 = new CustomImage('@public/imgs/gallery/sc_1502x1000__MG_3660.jpg', 1248, 830)
// Endregion

export const galleryOutside = new CustomImage('@public/imgs/galleryOutside.jpg', 860, 753)
export const galleryInside = new CustomImage('@public/imgs/galleryInside.jpg', 1037, 677)
export const reconstructionGalleryOutside = new CustomImage('@public/imgs/reconstructionGalleryOutside.jpg', 600, 400)
export const reconstructionGalleryInside = new CustomImage('@public/imgs/reconstructionGalleryInside.jpg', 600, 399)
export const escalatorGallery = new CustomImage('@public/imgs/escalatorGallery.jpg', 540, 384)

export const fizteh1 = new CustomImage('@public/imgs/fizteh-1.png', 1212, 738)
export const lianozovo1 = new CustomImage('@public/imgs/lianozovo-1.png', 1213, 658)
export const lianozovo2 = new CustomImage('@public/imgs/lianozovo-2.png', 1211, 798)
export const lianozovo3 = new CustomImage('@public/imgs/lianozovo-3.png', 1212, 675)
export const lianozovo4 = new CustomImage('@public/imgs/lianozovo-4.png', 1215, 776)
export const lianozovo5 = new CustomImage('@public/imgs/lianozovo-5.png', 1212, 980)
export const yahromskaya1 = new CustomImage('@public/imgs/yahromskaya-1.png', 1213, 776)

export const mmLogo = new CustomImage('@public/imgs/mm-logo.svg', 20, 20)
export const mcd = new CustomImage('@public/imgs/mcd.svg', 20, 20)
export const mascotYellowBus = new CustomImage('@public/imgs/APPLE_M-3.png', 452, 623)

export const magistralRoutes = new CustomImage('@public/imgs/8a1a4bb53927c95a8bd8d9ec63b6adc8.png', 168, 153)
export const landmarks = new CustomImage('@public/imgs/8165a1b52fdb6fb527075b16a3555b05.png', 158, 159)
export const moscowMapWithZone = new CustomImage('@public/imgs/fd1cb4ba5059487a5980182a1540d595.png', 198, 130)
export const circleGraphic = new CustomImage('@public/imgs/d06304b171b4e7e12578f1ea61e29978.png', 223, 133)
export const nizhnieKotle = new CustomImage('@public/imgs/a502e670773d2740f71f1c26a07ec3e5.png', 146, 134)
export const routesInAir = new CustomImage('@public/imgs/1729cc1cc0e0bbf27903a0c68f2c2998.png', 136, 136)
export const busStopWithRout = new CustomImage('@public/imgs/5b2e2aaba076731dfcfaaf53be0bb2f8.png', 310, 132)
export const letterWithWoman = new CustomImage('@public/imgs/9165f1d48c6b5580ed3bf9e0ff6fec1f.png', 195, 138)
export const puzzleWithPeople = new CustomImage('@public/imgs/423bb6e646b03b3b6bd1e23ee5f9abe4.png', 207, 147)
export const busWithClock = new CustomImage('@public/imgs/9dbe13ae124728d11fc0cd01cb16d095.png', 190, 112)
export const mapWithRoutes = new CustomImage('@public/imgs/c9c19aa3fca0df0edfde017f9cc4e031.png', 330, 490)
export const schemeRotes = new CustomImage('@public/imgs/533e99da3803bbbe36a23bba001a49fd.png', 310, 220)

export const inactivePassengerStair = new CustomImage('@public/imgs/inactivePassengerStair.jpg', 882, 588)
export const inactivePassengerTourniquet = new CustomImage('@public/imgs/inactivePassengerTourniquet.jpg', 882, 588)
export const inactivePassengerTrain = new CustomImage('@public/imgs/inactivePassengerTrain.jpg', 882, 588)
export const inactivePassengerExitTrain = new CustomImage('@public/imgs/inactivePassengerExitTrain.jpg', 882, 588)
export const inactivePassengerEscalator = new CustomImage('@public/imgs/inactivePassengerEscalator.jpg', 882, 588)
export const inactivePassengerWaitingTrain = new CustomImage('@public/imgs/inactivePassengerWaitingTrain.jpg', 882, 588)

export const probabilityPedestrianDeath = new CustomImage('@public/imgs/probabilityPedestrianDeath.jpg', 1280, 1280)

// mostrans/special_projects/denmostransporta
export const denmostransporta1 = new CustomImage('@public/imgs/denmostransporta1.png', 755, 460)
export const denmostransporta2 = new CustomImage('@public/imgs/denmostransporta2.png', 755, 460)
export const denmostransporta3 = new CustomImage('@public/imgs/denmostransporta3.png', 755, 460)
export const denmostransporta4 = new CustomImage('@public/imgs/denmostransporta4.png', 755, 460)

// /mcd/khovrino
export const khovrinoMap = new CustomImage('@public/imgs/khovrino.png', 1903, 738)

// /mostrans/for_journs/mosparking_online
export const yakimanskayaNaberechnaya1 = new CustomImage(
    '@public/imgs/mosparking-online/yakimanskayaNaberechnaya1.png',
    1024,
    575
)
export const yakimanskayaNaberechnaya2 = new CustomImage(
    '@public/imgs/mosparking-online/yakimanskayaNaberechnaya2.png',
    1024,
    575
)
export const mashkovaStreet1 = new CustomImage('@public/imgs/mosparking-online/mashkovaStreet1.png', 1024, 575)
export const mashkovaStreet2 = new CustomImage('@public/imgs/mosparking-online/mashkovaStreet2.png', 1024, 575)
export const pyatnichkayaStreet1 = new CustomImage('@public/imgs/mosparking-online/pyatnichkayaStreet1.png', 1024, 575)
export const pyatnichkayaStreet2 = new CustomImage('@public/imgs/mosparking-online/pyatnichkayaStreet2.png', 1024, 575)
export const stanislavskovoStreet1 = new CustomImage(
    '@public/imgs/mosparking-online/stanislavskovoStreet1.png',
    1024,
    575
)
export const stanislavskovoStreet2 = new CustomImage(
    '@public/imgs/mosparking-online/stanislavskovoStreet2.png',
    1024,
    575
)
export const trehpprudniyAlley1 = new CustomImage('@public/imgs/mosparking-online/trehpprudniyAlley1.png', 1024, 575)
export const trehpprudniyAlley2 = new CustomImage('@public/imgs/mosparking-online/trehpprudniyAlley2.png', 1024, 575)
export const firstObidenskiyAlley1 = new CustomImage(
    '@public/imgs/mosparking-online/firstObidenskiyAlley1.png',
    1024,
    575
)
export const firstObidenskiyAlley2 = new CustomImage(
    '@public/imgs/mosparking-online/firstObidenskiyAlley2.png',
    1024,
    575
)
export const beloruskiyRailwayStation1 = new CustomImage(
    '@public/imgs/mosparking-online/beloruskiyRailwayStation1.png',
    1024,
    575
)
export const beloruskiyRailwayStation2 = new CustomImage(
    '@public/imgs/mosparking-online/beloruskiyRailwayStation2.png',
    1024,
    575
)
export const ogorodniyTransit1 = new CustomImage('@public/imgs/mosparking-online/ogorodniyTransit1.png', 1024, 575)
export const ogorodniyTransit2 = new CustomImage('@public/imgs/mosparking-online/ogorodniyTransit2.png', 1024, 575)
export const maliyAfanaseviyAlley1 = new CustomImage(
    '@public/imgs/mosparking-online/maliyAfanaseviyAlley1.png',
    1024,
    575
)
export const maliyAfanaseviyAlley2 = new CustomImage(
    '@public/imgs/mosparking-online/maliyAfanaseviyAlley2.png',
    1024,
    575
)
export const baumanskayaStreet1 = new CustomImage('@public/imgs/mosparking-online/baumanskayaStreet1.png', 1024, 575)
export const baumanskayaStreet2 = new CustomImage('@public/imgs/mosparking-online/baumanskayaStreet2.png', 1024, 575)
export const podkopaemiyAlley1 = new CustomImage('@public/imgs/mosparking-online/podkopaemiyAlley1.png', 1024, 575)
export const podkopaemiyAlley2 = new CustomImage('@public/imgs/mosparking-online/podkopaemiyAlley2.png', 1024, 575)
export const nichnayaRadischevskayaStreet1 = new CustomImage(
    '@public/imgs/mosparking-online/nichnayaRadischevskayaStreet1.png',
    1024,
    575
)
export const nichnayaRadischevskayaStreet2 = new CustomImage(
    '@public/imgs/mosparking-online/nichnayaRadischevskayaStreet2.png',
    1024,
    575
)
export const zemlyanoyVal1 = new CustomImage('@public/imgs/mosparking-online/zemlyanoyVal1.png', 1024, 575)
export const zemlyanoyVal2 = new CustomImage('@public/imgs/mosparking-online/zemlyanoyVal2.png', 1024, 575)
export const secondKadashevskiyAlley1 = new CustomImage(
    '@public/imgs/mosparking-online/secondKadashevskiyAlley1.png',
    1024,
    575
)
export const secondKadashevskiyAlley2 = new CustomImage(
    '@public/imgs/mosparking-online/secondKadashevskiyAlley2.png',
    1024,
    575
)
export const bigDmitrovka1 = new CustomImage('@public/imgs/mosparking-online/bigDmitrovka1.png', 1024, 575)
export const bigDmitrovka2 = new CustomImage('@public/imgs/mosparking-online/bigDmitrovka2.png', 1024, 575)
export const bigAffanasevkiyAlley1 = new CustomImage(
    '@public/imgs/mosparking-online/bigAffanasevkiyAlley1.png',
    1024,
    575
)
export const bigAffanasevkiyAlley2 = new CustomImage(
    '@public/imgs/mosparking-online/bigAffanasevkiyAlley2.png',
    1024,
    575
)
export const podcopaevskiyAlley1 = new CustomImage('@public/imgs/mosparking-online/podcopaevskiyAlley1.png', 1024, 575)
export const podcopaevskiyAlley2 = new CustomImage('@public/imgs/mosparking-online/podcopaevskiyAlley2.png', 1024, 575)

// TODO: не переносить пикчу, удалить, когда будет привязываться бек
export const pictureTest = new CustomImage('@public/imgs/picture-test.png', 250, 80)

// mostrans/sciencesovet
export const MSLiksutov = new CustomImage('@public/imgs/MSLiksutov.png', 48, 49)
export const VIGrishin = new CustomImage('@public/imgs/VIGrishin.png', 48, 48)

export const magistralBus = new CustomImage('@public/imgs/magistralBus.png', 1200, 801)
