import React, {useState} from 'react'
import Profile from '../components/Profile'

export default function (){
    const [profiles, setProfiles] = useState([
        {
            id: '1',
            name: 'Angelina',
            mail: 'angelina.kropmanns@gmail.com',
            plz: '20535',
            city: 'Hamburg',
            gender: 'Männlich',
            rasse: 'Shiba Inu',
            about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
            search: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
          },
          {
            id: "2",
            name: "Tobi",
            mail: "tobias.kropmanns@gmail.com",
            plz: "20535",
            city: "Hamburg",
            gender: "Männlich",
            rasse: "Shiba Inu",
            about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
            search: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
          },
    ])

    return (
        <>
        <p>{profiles.map(
            profile => (
                <Profile key={profile.id}
                name={profile.name}
                mail={profile.mail}
                plz={profile.plz}
                city={profile.city}
                gender={profile.gender}
                rasse={profile.rasse}
                about={profile.about}
                search={profile.search} />
            )
        )}</p>
        </>
    )
}