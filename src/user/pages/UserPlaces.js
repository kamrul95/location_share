import React from 'react'
import PlaceList from '../components/PlaceList'

import { useParams } from 'react-router-dom'

const items = [
    {
        id: 'p1',
        imageUrl: 'https://images.unsplash.com/photo-1624171156512-077b7a150e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
        title: 'Pullman Zamzam Makkah',
        description: "A place is looking good",
        address: 'Complex King, Diamond Tower, Abdel Aziz Endowment, Al Haram, Mecca 21955, Saudi Arabia',
        creator: 'u1',
        location: {
            lat: 21.4193627,
            long: 39.8265113
        }
    },
    {
        id: 'p2',
        imageUrl: 'https://images.unsplash.com/photo-1540866225557-9e4c58100c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80',
        title: 'MADINAH MOVENPICK HOTEL',
        description: "A place of beauty",
        address: 'ANWAR AL MADINAH MOVENPICK HOTEL MADINA AL MUNAWARAH KSA',
        creator: 'u2',
        location: {
            lat: 24.4714358,
            long: 39.6074949
        }
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = items.filter((place) => place.creator === userId)
  return (
     <PlaceList items={loadedPlaces}/>
  )
}

export default UserPlaces