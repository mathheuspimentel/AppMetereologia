import styled from 'styled-components';

const ForecastContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const DayCard = styled.div`
    background-color: ${({theme}) => theme.colors.secondary };
    color: white;
    border-radius: 9px;
    padding: 10px;
    text-align: center;
    margin: 10px;
    flex: 1;
    min-width: 100px;
`;


const DateText = styled.p`
    margin: 0;
    font-weight: bold;
`;

const TempText = styled.p`
    margin: 5px 0 0 0;
`;

const WeatherForecast = ({forecast}) => (
    <ForecastContainer>
        {forecast.map((day, index) =>
            <DayCard key={index}>
               <DateText>{day.date}</DateText> 
               <TempText>Min: {day.minTemp}ºC</TempText>
               <TempText>Max: {day.maxTemp}ºC</TempText>
            </DayCard>
        )}
    </ForecastContainer>
);

export default WeatherForecast;
