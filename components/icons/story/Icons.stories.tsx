import AirportIcon from '@/components/icons/AirportIcon'
import AppGalleryIcon from '@/components/icons/AppGalleryIcon'
import AppStoreIcon from '@/components/icons/AppStoreIcon'
import ArrowIcon from '@/components/icons/ArrowIcon'
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon'
import ArrowSelectIcon from '@/components/icons/ArrowSelectIcon'
import BikeFillIcon from '@/components/icons/BikeFillIcon'
import BikeIcon from '@/components/icons/BikeIcon'
import BikeParkingIcon from '@/components/icons/BikeParkingIcon'
import BikeStrokeIcon from '@/components/icons/BikeStrokeIcon'
import BoatIcon from '@/components/icons/BoatIcon'
import BrickSignIcon from '@/components/icons/BrickSignIcon'
import BusFrontIcon from '@/components/icons/BusFrontIcon'
import BusHalfIcon from '@/components/icons/BusHalfIcon'
import BusIcon from '@/components/icons/BusIcon'
import BusStationIcon from '@/components/icons/BusStationIcon'
import CalendarIcon from '@/components/icons/CalendarIcon'
import CarIcon from '@/components/icons/CarIcon'
import CardStatusIcon from '@/components/icons/CardStatusIcon'
import CargoHalfIcon from '@/components/icons/CargoHalfIcon'
import CargoIcon from '@/components/icons/CargoIcon'
import CargoRegistrationIcon from '@/components/icons/CargoRegistrationIcon'
import CertificateReopenIcon from '@/components/icons/CertificateReopenIcon'
import CheckIcon from '@/components/icons/CheckIcon'
import ClimateControl from '@/components/icons/ClimateControl'
import ClockIcon from '@/components/icons/ClockIcon'
import CloseIcon from '@/components/icons/CloseIcon'
import ColoredAppGalleryIcon from '@/components/icons/ColoredAppGalleryIcon'
import ColoredGooglePlayIcon from '@/components/icons/ColoredGooglePlayIcon'
import ColoredRuStoreIcon from '@/components/icons/ColoredRuStoreIcon'
import CopyLinkIcon from '@/components/icons/CopyLinkIcon'
import DisabledPassengersIcon from '@/components/icons/DisabledPassengersIcon'
import DzenIcon from '@/components/icons/DzenIcon'
import DocIcon from '@/components/icons/DocIcon'
import ExchangeIcon from '@/components/icons/ExchangeIcon'
import ExchangeVerticalIcon from '@/components/icons/ExchangeVerticalIcon'
import ExternalLinkIcon from '@/components/icons/ExternalLinkIcon'
import FamilyIcon from '@/components/icons/FamilyIcon'
import GeolocationIcon from '@/components/icons/GeolocationIcon'
import GlassesIcon from '@/components/icons/GlassesIcon'
import GooglePlayIcon from '@/components/icons/GooglePlayIcon'
import HumanIcon from '@/components/icons/HumanIcon'
import KremlinStarIcon from '@/components/icons/KremlinStarIcon'
import LoginIcon from '@/components/icons/LoginIcon'
import MenuSearchIcon from '@/components/icons/MenuSearchIcon'
import MetroLandMarkIcon from '@/components/icons/MetroLandMarkIcon'
import MinibusIcon from '@/components/icons/MinibusIcon'
import MinusIcon from '@/components/icons/MinusIcon'
import MoneyToCardIcon from '@/components/icons/MoneyToCardIcon'
import MoonIcon from '@/components/icons/MoonIcon'
import MotobikeHalfIcon from '@/components/icons/MotobikeHalfIcon'
import MotobikeIcon from '@/components/icons/MotobikeIcon'
import NewWindowLinkIcon from '@/components/icons/NewWindowLinkIcon'
import OkIcon from '@/components/icons/OkIcon'
import PassIcon from '@/components/icons/PassIcon'
import PermissionCheckIcon from '@/components/icons/PermissionCheckIcon'
import PhoneIcon from '@/components/icons/PhoneIcon'
import PlusIcon from '@/components/icons/PlusIcon'
import PrintIcon from '@/components/icons/PrintIcon'
import RoubleIcon from '@/components/icons/RoubleIcon'
import RuStoreIcon from '@/components/icons/RuStoreIcon'
import ScaleUpIcon from '@/components/icons/ScaleUpIcon'
import ScooterIcon from '@/components/icons/ScooterIcon'
import SearchIcon from '@/components/icons/SearchIcon'
import SearchMenuIcon from '@/components/icons/SearchMenuIcon'
import SunIcon from '@/components/icons/SunIcon'
import TaxiHalfIcon from '@/components/icons/TaxiHalfIcon'
import TgIcon from '@/components/icons/TgIcon'
import TrainIcon from '@/components/icons/TrainIcon'
import TramIcon from '@/components/icons/TramIcon'
import TramStationIcon from '@/components/icons/TramStationIcon'
import TrolleybusIcon from '@/components/icons/TrolleybusIcon'
import VeteranIcon from '@/components/icons/VeteranIcon'
import VkIcon from '@/components/icons/VkIcon'
import WCIcon from '@/components/icons/WCIcon'
import WifiIcon from '@/components/icons/WifiIcon'
import MetroLabelLogo from '@/components/icons/logos/MetroLabelLogo'
import { cn } from '@/utils'
import { Meta, StoryObj } from '@storybook/react'
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'
import CardWithHandIcon from '../CardWithHandIcon'
import CoinIcon from '../CoinIcon'
import TransportCardsIcon from '../TransportCardsIcon'
import DeliveryIcon from '../DeliveryIcon'
import NextArrowIcon from '../NextArrowIcon'
import CalendarStrokeIcon from '../CalendarStrokeIcon'
import InfoIcon from '../InfoIcon'

const iconList = [
    AirportIcon,
    ArrowIcon,
    ArrowLeftIcon,
    ArrowSelectIcon,
    BikeFillIcon,
    BikeIcon,
    BikeParkingIcon,
    BikeStrokeIcon,
    BoatIcon,
    BrickSignIcon,
    BusFrontIcon,
    BusHalfIcon,
    BusIcon,
    BusStationIcon,
    CalendarIcon,
    CalendarStrokeIcon,
    CarIcon,
    CardStatusIcon,
    CargoHalfIcon,
    CargoIcon,
    CargoRegistrationIcon,
    CertificateReopenIcon,
    CheckIcon,
    ClimateControl,
    ClockIcon,
    CloseIcon,
    CopyLinkIcon,
    ColoredRuStoreIcon,
    CardWithHandIcon,
    CoinIcon,
    DisabledPassengersIcon,
    DzenIcon,
    ExchangeIcon,
    ExchangeVerticalIcon,
    ExternalLinkIcon,
    NextArrowIcon,
    FamilyIcon,
    GeolocationIcon,
    GlassesIcon,
    HumanIcon,
    InfoIcon,
    KremlinStarIcon,
    LoginIcon,
    MenuSearchIcon,
    MinibusIcon,
    MinusIcon,
    MoneyToCardIcon,
    MoonIcon,
    MotobikeHalfIcon,
    MotobikeIcon,
    NewWindowLinkIcon,
    OkIcon,
    PassIcon,
    PermissionCheckIcon,
    PhoneIcon,
    PlusIcon,
    PrintIcon,
    RoubleIcon,
    ScaleUpIcon,
    ScooterIcon,
    SearchIcon,
    SearchMenuIcon,
    SunIcon,
    TaxiHalfIcon,
    TgIcon,
    TrainIcon,
    TramIcon,
    TramStationIcon,
    TrolleybusIcon,
    TransportCardsIcon,
    VeteranIcon,
    VkIcon,
    WCIcon,
    WifiIcon,
    MetroLabelLogo,
    DocIcon,
    MetroLandMarkIcon,
    AppStoreIcon,
    AppGalleryIcon,
    ColoredAppGalleryIcon,
    GooglePlayIcon,
    ColoredGooglePlayIcon,
    RuStoreIcon,
    DeliveryIcon,
]

interface IconProps {
    Icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>>
    name?: string
}

const meta: Meta = {
    title: 'Components/Icons',
    component: IconsStories,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}

function Icon({ Icon, name }: IconProps) {
    return (
        <div className={cn('flex', 'flex-col', 'items-center')}>
            <Icon className={cn('text-[4.8rem]')} />
            <p className={cn('text-center', 'text-[1.2rem]', 'mt-[2rem]')}>{name || Icon.displayName}</p>
        </div>
    )
}

function IconsStories({ className }: { className: string }) {
    return (
        <div className={cn('grid', 'grid-cols-[repeat(auto-fill,minmax(128px,1fr))]', 'gap-base', className)}>
            {iconList.map((El, idx) => (
                <Icon
                    key={idx}
                    Icon={El}
                />
            ))}
        </div>
    )
}
