import { v4 as uuidv4 } from 'uuid'

const firstnames = ['Mara', 'Nathan', 'Daniel', 'Percy', 'Ramon', 'Brad', 'Fred', 'Nathan', 'Shelby', 'Marvin', 'Harvey', 'Johnny', 'Felicity', 'Analise', 'Carter', 'Wade', 'Bristol', 'Erick', 'Cameron', 'Lillian', 'Marigold', 'Molly', 'Rocco', 'Christy', 'Leroy', 'Lucas', 'Barry', 'Eduardo', 'Cassidy', 'Michael', 'Gil', 'Jayden', 'Adalie', 'Margaret', 'Alessia', 'Tania', 'Bob', 'Erick', 'Javier', 'Bernadette', 'Aiden', 'Sylvia', 'Christine', 'Daniel', 'Gabriel', 'Ivette', 'Makenzie', 'Chester', 'Johnathan', 'Margot', 'Clint', 'Isabella', 'Jack', 'Owen', 'Faith', 'Bob', 'Anthony', 'Amelia', 'Harvey', 'Luke', 'Emerald', 'Carol', 'Alessandra', 'Marie', 'Elijah', 'Josh', 'Enoch', 'Rick', 'Kate', 'Celia', 'Jane', 'Denis', 'Mya', 'Marvin', 'Hank', 'Ember', 'Oliver', 'Liam', 'Enoch', 'Russel', 'Abdul', 'Margaret', 'Ronald', 'Chad', 'Chester', 'Manuel', 'Phillip', 'Wade', 'Laila', 'Liam', 'Michael', 'Harvey', 'Meredith', 'Emerald', 'Gil', 'Benjamin', 'Martin', 'Tom', 'Boris', 'Doug']
const lastnames = ['Parker', 'Shaw', 'Eaton', 'Dobson', 'Townend', 'Chappell', 'Evans', 'Olivier', 'Dempsey', 'Osman', 'Baldwin', 'Coleman', 'Clarke', 'Herbert', 'Brown', 'Pickard', 'Lindsay', 'Quinnell', 'Brooks', 'Scott', 'Gonzales', 'Clarke', 'Greenwood', 'Woods', 'Roberts', 'Farrell', 'Randall', 'Wilson', 'Raven', 'Heaton', 'Shields', 'Rycroft', 'Buckley', 'York', 'Parker', 'West', 'Clifford', 'Martin', 'Dallas', 'Boyle', 'Skinner', 'Addison', 'Asher', 'Allcott', 'Norton', 'Patel', 'Lyon', 'Raven', 'Brennan', 'Alldridge', 'Carson', 'Briggs', 'Allington', 'Windsor', 'Fleming', 'Lucas', 'Parker', 'Hastings', 'Vince', 'Barclay', 'Lewis', 'Wilton', 'Bryson', 'Nielson', 'Simmons', 'Upsdell', 'Truscott', 'Jordan', 'Grady', 'Power', 'Wade', 'Rose', 'Davies', 'Marshall', 'Morgan', 'Anderson', 'Callan', 'Collins', 'Hepburn', 'Adler', 'Stewart', 'Nobbs', 'Cox', 'Silva', 'Noon', 'Bright', 'Windsor', 'Plumb', 'Mcgee', 'Nicolas', 'Vinton', 'Richards', 'Ryan', 'Taylor', 'Lynch', 'Bailey', 'Dixon', 'Rigg', 'Marshall', 'Darcy']
const carTitles = ['A4', 'Accent', 'Acclaim', 'Accord', 'Achieva', 'Aerio', 'Aerostar', 'Alero', 'Allante', 'Alliance', 'Altima', 'Alto', 'Amigo', 'Aqua', 'Aries', 'Arnage', 'Arrow', 'Ascender', 'Aspen', 'Aspire', 'Astro', 'Aurora', 'Austin', 'Avalanche', 'Avenger', 'Aveo', 'Aviator', 'Axiom', 'Axxess', 'Aztek', 'Azure', 'Baja', 'Barchetta', 'Beetle', 'Beretta', 'Blackwood', 'Blazer', 'Bonneville', 'Boxter', 'Brat', 'Brava', 'Bravada', 'Breeze', 'Brio', 'Bronco', 'Brooklands', 'Brougham', 'Caballero', 'Cabrio', 'Cabriolet', 'Calais', 'Camargue', 'Camaro', 'Camry', 'Capri', 'Caprice', 'Caravan', 'Caravelle', 'Carry', 'Catera', 'Cavalier', 'Cayenne', 'Celebrity', 'Celica', 'Century', 'Challenger', 'Champ', 'Charade', 'Charger', 'Cherokee', 'Chevelle', 'Chevette', 'Cheyenne', 'Ciera', 'Cimarron', 'Cirrus', 'Citation', 'City', 'Civic', 'Club Wagon', 'Colorado', 'Colt', 'Comanche', 'Concord', 'Concorde', 'Conquest', 'Continental', 'Contour', 'Cooper', 'Cordia', 'Cordoba', 'Corniche', 'Corolla', 'Corrado', 'Corsica', 'Corvette', 'Cougar', 'Countach', 'Courier', 'Cressida', 'Crown Victoria', 'Cultus', 'Cutlass', 'Dakota', 'Dart', 'Dasher', 'Daytona', 'Defender', 'del Sol', 'DeVille', 'Diablo', 'Diamante', 'Dino', 'Diplomat', 'Discovery', 'DTS', 'Durango', 'Duster', 'Dynasty', 'Eagle', 'Echo', 'Eclipse', 'Econoline', 'Edge', 'Eight', 'Eighty-Eight', 'Elantra', 'ElCamino', 'Eldorado', 'Electra', 'Element', 'Encore', 'Envoy', 'Equinox', 'Escalade', 'Escape', 'Escort', 'Esperante', 'Esprit', 'Estate', 'Esteem', 'Eurovan', 'Excel', 'Excursion', 'Expedition', 'Explorer', 'Expo', 'Express', 'Fabia', 'Fairmont', 'Festiva', 'Fiero', 'Fifth Avenue', 'Firebird', 'Firenza', 'Fleetwood', 'Flex Crossover', 'Focus', 'Forester', 'Fox', 'Freelander', 'Frontier', 'Fuego', 'FX', 'Galant', 'Golf', 'Graduate', 'Gran Fury', 'Grand Am', 'Grand Prix', 'Grand Voyager', 'Gremlin', 'Grenada', 'GTO', 'Highlander', 'Hombre', 'Horizon', 'Hornet', 'Hummer', 'Impala', 'Imperial', 'Impreza', 'Impulse', 'Insight', 'Integra', 'Intrepid', 'Intrigue', 'Javelin', 'Jetta', 'Jimmy', 'Jimny', 'Justy', 'Karmann Ghia', 'Khyber', 'Kitten', 'Kodiak', 'Lagonda', 'Lancer', 'Land Cruiser', 'Lanos', 'Laser', 'LeBaron', 'Legacy', 'Leganza', 'Legend', 'LeMans', 'LeSabre', 'Liberte', 'Liberty', 'Loyale', 'Lumina', 'Luv', 'Lynx', 'Magnum', 'Malibu', 'Mangusta', 'Marquis', 'Matador', 'Matrix', 'Maxima', 'Medallion', 'Mehran', 'Metro', 'Miata', 'Midget', 'Milano', 'Millenia', 'Mirada', 'Mirage', 'Modena', 'Monaco', 'Mondial', 'Montana', 'Monte Carlo', 'Montero', 'Monza', 'Morris', 'Mountaineer', 'Mulsanne', 'Murano', 'Murcielago', 'Mustang', 'Mystique', 'Naked', 'Navajo', 'Navigator', 'Neon', 'New Yorker', 'Newport', 'Ninety-Eight', 'Nova', 'NSX', 'Nubira', 'Oasis', 'Odyssey', 'Omega', 'Omni', 'Optima', 'Outback', 'Outlander', 'Pacer', 'Pacifica', 'Pajero', 'Parisienne', 'Park Avenue', 'Park Ward', 'Paseo', 'Passat', 'Passport', 'Pathfinder', 'Phaeton', 'Phantom', 'Phoenix', 'Pilot', 'Pinto', 'Pivo', 'Pininfarina', 'Precis', 'Prelude', 'Premier', 'Previa', 'Prizm', 'Probe', 'Protégé', 'Prowler', 'Prius', 'Prius C', 'PT Cruiser', 'Pulsar', 'Puyo', 'Quadrifoglio', 'Quantum', 'Quattro', 'Quest', 'R8', 'Rabbit', 'Raider', 'Rally', 'Ram', 'Ramcharger', 'Rampage', 'Range Rover', 'Ranger', 'Reatta', 'Rebel', 'Regal', 'Regency', 'Reliant', 'Reventon', 'Rendezvous', 'Rialto', 'Rio', 'Riviera', 'Roadmaster', 'Roadster', 'Robin', 'Rocky', 'Rodeo', 'Sable', 'Safari', 'Safari', 'Samuri', 'Santa Fe', 'Sapporo', 'Savana', 'Scamp', 'Scimitar', 'Scirocco', 'Scorpio', 'Scrambler', 'Sebring', 'Sedona', 'Sentra', 'Sephia', 'Sequoia', 'Seville', 'Shadow', 'Sidekick', 'Sienna', 'Sierra', 'Sigma', 'Silhouette', 'Silver Dawn', 'Silver Seraph', 'Silver Shadow', 'Silver Spirit', 'Silver Spur', 'Silver Wraith', 'Silverado', 'Skyhawk', 'Skylark', 'Solara', 'Somerset', 'Sonata', 'Sonoma', 'Sorento', 'Spectra', 'Spectrum', 'Spider', 'Spirit', 'Sportage', 'Sportvan', 'Sprint', 'Spyder', 'St. Regis', 'Stanza', 'Starion', 'Starlet', 'Stealth', 'Storm', 'Strada', 'Stratus', 'Stylus', 'Suburban', 'Suburban', 'Summit', 'Sunbird', 'Sundance', 'Sunfire', 'Superb', 'Supra', 'Swift', 'Tacoma', 'Tahoe', 'Talon', 'Taurus', 'Tempo', 'Tercel', 'Testarossa', 'Thunderbird', 'Tiburon', 'Titan', 'Topaz', 'Toronado', 'Touareg', 'Town & Country', 'Town Car', 'tracker', 'TrailBlazer', 'Trans Sport', 'Tredia', 'Tribute', 'Trooper', 'Tundra', 'Turbo', 'Turismo', 'UNO', 'Uplander', 'Vanagon', 'Vandura', 'Vanquish', 'Vantage', 'VehiCROSS', 'Venture', 'Vibe', 'Vigor', 'Villager', 'Viper', 'Virage', 'Vision', 'Vitara', 'Volare', 'Voyager', 'Wagoneer', 'Windstar', 'Wrangler', 'Xantia', 'Xterra', 'Yaris', 'Yeti']
const avatars = ['avatar-man.jpg', 'avatar-woman.jpg']

// The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function getRandomFromList(list) {
  return list[getRandomInt(0, list.length)]
}

function getRandomPhone() {
  return new Array(3)
    .fill(new Array(3).fill(0))
    .map((part) => part.map(() => getRandomInt(0, 10)).join(''))
    .join('-')
}

function getRandomTime() {
  return new Date().getTime() - getRandomInt(0, 100000000000)
}

export const getRandomMerchants = (count=1) => {
  return new Array(count).fill({}).map(() => {
    const firstname = getRandomFromList(firstnames)
    const lastname  = getRandomFromList(lastnames)

    return {
      id: uuidv4(),
      firstname,
      lastname,
      avatarUrl: getRandomFromList(avatars),
      email: `${firstname}.${lastname}@gmail.com`,
      phone: getRandomPhone(),
      hasPremium: getRandomFromList([true, false]),
      bids: new Array(getRandomInt(1, 30)).fill({}).map(() => ({
        id: uuidv4(),
        carTitle: getRandomFromList(carTitles),
        amount: getRandomInt(1, 100),
        created: getRandomTime(),
      }))
    }
  })
}
