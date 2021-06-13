import {useState, useMemo} from  'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationServices'
import { ApiService } from 'data/services/ApiService'

export default function  () {
    const [cep, setCep] = useState(''),
        cepValido  = useMemo(( ) => {
            return ValidationService.cep(cep);
        }, [cep]),
        [erro, setErro]  = useState(''),
        [buscaFeita, setBuscaFeita] = useState(false),
        [carregando, setCarregando] = useState(false),
        [diaristas, setDiarista] = useState([] as UserShortInterface[]),
        [diaristaRestante, setDiaristaRestante] = useState(0);

    async function buscarProfissionais(cep: string) {
        setBuscaFeita(false);
        setCarregando(true);
        setErro('');

        try {
            const {data}  = await ApiService.get<{
                diaristas:  UserShortInterface[]
                quantidade_diarista: number
            }>('/api/diaristas-cidade?cep='+cep.replace(/\D/g, ''));

            setDiarista(data.diaristas);
            setDiaristaRestante(data.quantidade_diarista);
            setBuscaFeita(true);
            setCarregando(false);
        } catch (error) {
            setErro('CEP não encontrado')
            setCarregando(false);
        }
    }

    return {
        cep, setCep, cepValido, buscarProfissionais, erro, setErro, diaristas, buscaFeita, carregando, diaristaRestante
    }

}
