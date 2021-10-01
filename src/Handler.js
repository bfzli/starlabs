import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Loading from "./components/Loading";

export default function Handler() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ABC');
  const [teams, setTeams] = useState(null);
  const [howManyTeams, setHowManyTeams] = useState(0);

  const get_data = async () => {
    const response = await axios.get('https://api.codetabs.com/v1/proxy?quest=https://api.first.org/data/v1/teams');
    const filter = response.data.data.sort((a, b) => (a["team-full"] > b["team-full"]) ? 1 :  -1 );
    setTeams(filter);
    setHowManyTeams(response.data.data.length)
  };

  useEffect(() => {
     get_data();
  }, []);

  function change_filter(){
    if(filter === 'ABC'){
       setFilter('BCA')
      const filter = teams.sort((a, b) => (a["team-full"].toLocaleLowerCase() < b["team-full"].toLocaleLowerCase()) ? 1 :  -1 );
      setTeams(filter);
      } else {
        setFilter('ABC')
        const filter = teams.sort((a, b) => (a["team-full"].toLocaleLowerCase() > b["team-full"].toLocaleLowerCase()) ? 1 :  -1 );
        setTeams(filter);
      }
  }

  return (
    <div>
      <Header filter={filter} search={search} setSearch={setSearch} change_filter={() => change_filter()} howMany={howManyTeams} />
      <div className="container">
        {
          teams === null

            ?

            <Loading />

            :
            teams.filter((value) => {
              if(search === ''){
                return value;
              } else if(
                value["team-full"].toLowerCase().includes(search.toLocaleLowerCase())
              ){
                return value;
              }
            }).map(current => <div>
              <Card data={current} id="current.id" />
            </div>)
        }
      </div>
    </div>
  );
}