import { Person } from '../../components/WorkerCard'
import { PersonIds } from './personIds'
import {
    alexanderGarakoev,
    alexeyKostromin,
    alexeyMityaev,
    anastasiaShaliapina,
    andreyBabarykin,
    andreyKorneev,
    denisFalin,
    dmitryPronin,
    dmitrySokolov,
    elenaKudryashova,
    hamidBulatov,
    harutyunOganesyan,
    ibragimGaziev,
    igorKrasnozhen,
    irinaYefimova,
    khasyanProkurorov,
    maksimLiksutov,
    oksanaVorobyova,
    olegZaitsev,
    pavelMikhailov,
    romanLatypov,
    sergeyAlexyuk,
    valeryGrudev,
    vladimirMakarov,
    yuliaTemnikova,
} from '@/Images'
import { personDetails } from './personsDetail'

export const persons: Record<PersonIds, Person> = {
    [PersonIds.maksimLiksutov]: {
        id: PersonIds.maksimLiksutov,
        fullName: 'Ликсутов Максим Станиславович',
        jobTitle:
            'Заместитель Мэра Москвы в Правительстве Москвы, руководитель Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: maksimLiksutov,
        detail: personDetails.maksimLiksutov,
    },
    [PersonIds.romanLatypov]: {
        id: PersonIds.romanLatypov,
        fullName: 'Латыпов Роман Маратович',
        jobTitle:
            'Первый заместитель руководителя Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы – руководитель контрактной службы',
        image: romanLatypov,
        detail: personDetails.romanLatypov,
    },
    [PersonIds.elenaKudryashova]: {
        id: PersonIds.elenaKudryashova,
        fullName: 'Кудряшова Елена Юрьевна',
        jobTitle:
            'Начальник управления сопровождения программ и бюджета Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: elenaKudryashova,
        detail: personDetails.elenaKudryashova,
    },
    [PersonIds.oksanaVorobyova]: {
        id: PersonIds.oksanaVorobyova,
        fullName: 'Воробьёва Оксана Михайловна',
        jobTitle:
            'Начальник Управления по контролю корпоративного развития подведомственных предприятий Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: oksanaVorobyova,
        detail: personDetails.oksanaVorobyova,
    },
    [PersonIds.ibragimGaziev]: {
        id: PersonIds.ibragimGaziev,
        fullName: 'Газиев Ибрагим Шагавдинович',
        jobTitle:
            'Заведующий сектором материально-технического обеспечения Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: ibragimGaziev,
        detail: personDetails.ibragimGaziev,
    },
    [PersonIds.hamidBulatov]: {
        id: PersonIds.hamidBulatov,
        fullName: 'Булатов Гамид Баширович',
        jobTitle:
            'Первый заместитель руководителя Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: hamidBulatov,
        detail: personDetails.hamidBulatov,
    },
    [PersonIds.alexeyKostromin]: {
        id: PersonIds.alexeyKostromin,
        fullName: 'Костромин Алексей Сергеевич',
        jobTitle:
            'Начальник Отдела государственного контроля внеуличных видов транспорта Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: alexeyKostromin,
        detail: personDetails.alexeyKostromin,
    },
    [PersonIds.harutyunOganesyan]: {
        id: PersonIds.harutyunOganesyan,
        fullName: 'Оганесян Арутюн Араикович',
        jobTitle:
            'Начальник Управления развития рельсовых видов транспорта и перспективного развития транспортно-пересадочных узлов Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: harutyunOganesyan,
        detail: personDetails.harutyunOganesyan,
    },
    [PersonIds.igorKrasnozhen]: {
        id: PersonIds.igorKrasnozhen,
        fullName: 'Красножен Игорь Владимирович',
        jobTitle:
            'Начальник Управления развития транспортных коммуникаций Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: igorKrasnozhen,
        detail: personDetails.igorKrasnozhen,
    },
    [PersonIds.andreyKorneev]: {
        id: PersonIds.andreyKorneev,
        fullName: 'Корнеев Андрей Александрович',
        jobTitle:
            'Заместитель руководителя Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: andreyKorneev,
        detail: personDetails.andreyKorneev,
    },
    [PersonIds.olegZaitsev]: {
        id: PersonIds.olegZaitsev,
        fullName: 'Зайцев Олег Николаевич',
        jobTitle:
            'Начальник Правового управления Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: olegZaitsev,
        detail: personDetails.olegZaitsev,
    },
    [PersonIds.pavelMikhailov]: {
        id: PersonIds.pavelMikhailov,
        fullName: 'Михайлов Павел Михайлович',
        jobTitle:
            'Начальник Управления государственной службы и кадров Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: pavelMikhailov,
        detail: personDetails.pavelMikhailov,
    },
    [PersonIds.alexanderGarakoev]: {
        id: PersonIds.alexanderGarakoev,
        fullName: 'Гаракоев Александр Курейшевич',
        jobTitle:
            'Заместитель руководителя Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: alexanderGarakoev,
        detail: personDetails.alexanderGarakoev,
    },
    [PersonIds.valeryGrudev]: {
        id: PersonIds.valeryGrudev,
        fullName: 'Грудев Валерий Геннадьевич',
        jobTitle:
            'Начальник Первого отдела Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: valeryGrudev,
        detail: personDetails.valeryGrudev,
    },
    [PersonIds.khasyanProkurorov]: {
        id: PersonIds.khasyanProkurorov,
        fullName: 'Прокуроров Хасян Рашитович',
        jobTitle:
            'Начальник Второго отдела Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: khasyanProkurorov,
        detail: personDetails.khasyanProkurorov,
    },
    [PersonIds.denisFalin]: {
        id: PersonIds.denisFalin,
        fullName: 'Фалин Денис Сергеевич',
        jobTitle:
            'Начальник Управления транспортной безопасности Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: denisFalin,
        detail: personDetails.denisFalin,
    },
    [PersonIds.alexeyMityaev]: {
        id: PersonIds.alexeyMityaev,
        fullName: 'Митяев Алексей Юрьевич',
        jobTitle:
            'Заместитель руководителя Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: alexeyMityaev,
        detail: personDetails.alexeyMityaev,
    },
    [PersonIds.vladimirMakarov]: {
        id: PersonIds.vladimirMakarov,
        fullName: 'Макаров Владимир Владимирович',
        jobTitle:
            'Заместитель руководителя Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: vladimirMakarov,
        detail: personDetails.vladimirMakarov,
    },
    [PersonIds.sergeyAlexyuk]: {
        id: PersonIds.sergeyAlexyuk,
        fullName: 'Алексюк Сергей Сергеевич',
        jobTitle:
            'Начальник Управления развития таксомоторных перевозок Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: sergeyAlexyuk,
        detail: personDetails.sergeyAlexyuk,
    },
    [PersonIds.dmitrySokolov]: {
        id: PersonIds.dmitrySokolov,
        fullName: 'Соколов Дмитрий Константинович',
        jobTitle:
            'Начальник Управления развития дорожно-транспортной инфраструктуры Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: dmitrySokolov,
        detail: personDetails.dmitrySokolov,
    },
    [PersonIds.dmitryPronin]: {
        id: PersonIds.dmitryPronin,
        fullName: 'Пронин Дмитрий Валентинович',
        jobTitle:
            'Заместитель руководителя Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы',
        image: dmitryPronin,
        detail: personDetails.dmitryPronin,
    },
    [PersonIds.yuliaTemnikova]: {
        id: PersonIds.yuliaTemnikova,
        fullName: 'Темникова Юлия Юрьевна',
        jobTitle:
            'Советник заместителя Мэра Москвы в Правительстве Москвы по вопросам транспорта, заместитель начальника Московского метрополитена\n',
        image: yuliaTemnikova,
        detail: personDetails.yuliaTemnikova,
    },
    [PersonIds.irinaYefimova]: {
        id: PersonIds.irinaYefimova,
        fullName: 'Ефимова Ирина Владимировна',
        jobTitle:
            'Начальник управления бухгалтерского учета Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы - главный бухгалтер\n',
        image: irinaYefimova,
        detail: personDetails.irinaYefimova,
    },
    [PersonIds.anastasiaShaliapina]: {
        id: PersonIds.anastasiaShaliapina,
        fullName: 'Шаляпина Анастасия Викторовна',
        jobTitle:
            'Начальник Управления контроля Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы\n',
        image: anastasiaShaliapina,
        detail: personDetails.anastasiaShaliapina,
    },
    [PersonIds.andreyBabarykin]: {
        id: PersonIds.andreyBabarykin,
        fullName: 'Бабарыкин Андрей Валерьевич',
        jobTitle:
            'Начальник Организационно-контрольного управления Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы\n',
        image: andreyBabarykin,
        detail: personDetails.andreyBabarykin,
    },
}
