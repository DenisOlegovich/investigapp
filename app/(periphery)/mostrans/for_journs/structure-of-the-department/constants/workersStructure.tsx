import { Person } from '../components/WorkerCard'
import { PersonIds } from './persons/personIds'
import { persons } from '@/app/(periphery)/mostrans/for_journs/structure-of-the-department/constants/persons'

type Workers = Person & { subordinates?: Workers[] }

export const workersStructure: Workers = {
    ...persons[PersonIds.maksimLiksutov],
    subordinates: [
        {
            ...persons[PersonIds.romanLatypov],
            subordinates: [
                persons[PersonIds.elenaKudryashova],
                persons[PersonIds.oksanaVorobyova],
                persons[PersonIds.ibragimGaziev],
            ],
        },
        {
            ...persons[PersonIds.hamidBulatov],
            subordinates: [
                persons[PersonIds.alexeyKostromin],
                persons[PersonIds.harutyunOganesyan],
                persons[PersonIds.igorKrasnozhen],
            ],
        },
        {
            ...persons[PersonIds.andreyKorneev],
            subordinates: [persons[PersonIds.olegZaitsev], persons[PersonIds.pavelMikhailov]],
        },
        {
            ...persons[PersonIds.alexanderGarakoev],
            subordinates: [
                persons[PersonIds.valeryGrudev],
                persons[PersonIds.khasyanProkurorov],
                persons[PersonIds.denisFalin],
            ],
        },
        {
            ...persons[PersonIds.alexeyMityaev],
        },
        {
            ...persons[PersonIds.vladimirMakarov],
            subordinates: [persons[PersonIds.sergeyAlexyuk], persons[PersonIds.dmitrySokolov]],
        },
        {
            ...persons[PersonIds.dmitryPronin],
        },
        {
            ...persons[PersonIds.yuliaTemnikova],
        },
        {
            ...persons[PersonIds.irinaYefimova],
        },
        {
            ...persons[PersonIds.anastasiaShaliapina],
        },
        {
            ...persons[PersonIds.andreyBabarykin],
        },
    ],
}
