import Head from 'next/head'
import Image from 'next/image'
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'
import TextFIeldMask from 'ui/components/inputs/TextFIeldMask/TextFIeldMask'
import { Button, Typography, Container, CircularProgress }  from '@material-ui/core'
import {FormElementsContainer, ProfissionaisPaper, ProfissionaisContainer} from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page'


export default function Home() {

    const {cep, setCep, cepValido, buscarProfissionais, erro, diaristas, buscaFeita, carregando, diaristaRestante} = useIndex();


    return (
        <div>
            <SafeEnviroment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={
                    'Preencha seu endereço e veja todos os profissionais da sua localidade'
                }
            />

            <Container>

                <FormElementsContainer>
                    <TextFIeldMask  mask={'99999-999'} label={'Digite o seu CEP'} fullWidth
                        variant={'outlined'} value={cep} onChange={(event) => setCep(event.target.value)}
                    />
                    {erro && <Typography color={'error'}>{erro}</Typography>}
                    <Button variant={'contained'} color={'secondary'} sx={{width: '220px'}}
                        disabled={!cepValido || carregando} onClick={() => buscarProfissionais(cep)}
                    > {carregando ? <CircularProgress size={20} /> : 'Buscar' } </Button>
                </FormElementsContainer>

                {buscaFeita && ( diaristas.length > 0 ?
                    <ProfissionaisPaper>
                        <ProfissionaisContainer>
                            { diaristas.map((item, index) => {
                                return (
                                    <UserInformation
                                        key={index}
                                        picture= {item.foto_usuario}
                                        name={item.nome_completo}
                                        rating={item.reputacao}
                                        description={item.cidade}
                                    />
                                )
                            })}

                        </ProfissionaisContainer>
                        <Container sx={{ textAlign: 'center'}}>
                            {diaristaRestante > 0 && (
                                <Typography sx={{mt: 5}}>
                                    ... e mais {diaristaRestante} {diaristaRestante > 1 ? 'profissionais atendem' : 'profissional atende'}  ao seu endereço
                                </Typography>
                            )}
                            <Button variant={'contained'} color={'secondary'} sx={{mt: 5}}>
                                Contratar um profissianal
                            </Button>
                        </Container>
                    </ProfissionaisPaper>

                    : (
                        <Typography align={'center'} color={'textPrimary'}>
                            Ainda não temos nenhuma diarista disponivel em sua região
                        </Typography>
                    )
                )}

            </Container>
        </div>
    )
}
