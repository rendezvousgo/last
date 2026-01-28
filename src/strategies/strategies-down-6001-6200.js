/**
 * DOWN ���� Ȯ�� (ID: 6001-6200)
 * 3-��ǥ ���� ���� (���)
 * 6001-6100: MACD/BB/EMA ��� 3-��ǥ ����
 * 6101-6200: Stoch/ADX/CCI/Williams ��� 3-��ǥ ����
 */

export class StrategiesDown6001 {
    
    // ==================== MACD ��� 3-��ǥ ���� (6001-6050) ====================
    
    /** ���� 6001: MACD + EMA + CCI Ʈ���� */
    static strategy6001(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.cci > 80;
        return { id: 6001, name: 'MACD EMA CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6002: MACD + EMA + Williams Ʈ���� */
    static strategy6002(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && ind.williamsR > -30;
        return { id: 6002, name: 'MACD EMA Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6003: MACD + EMA + OBV Ʈ���� */
    static strategy6003(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6003, name: 'MACD EMA OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6004: MACD + EMA + ATR Ʈ���� */
    static strategy6004(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.ema20 < ind.ema50 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6004, name: 'MACD EMA ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6005: MACD + Stoch + CCI Ʈ���� */
    static strategy6005(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 70 && ind.cci > 80;
        return { id: 6005, name: 'MACD Stoch CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6006: MACD + Stoch + Williams Ʈ���� */
    static strategy6006(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 70 && ind.williamsR > -30;
        return { id: 6006, name: 'MACD Stoch Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6007: MACD + Stoch + OBV Ʈ���� */
    static strategy6007(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 70 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6007, name: 'MACD Stoch OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6008: MACD + Stoch + ATR Ʈ���� */
    static strategy6008(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.stochastic?.k > 70 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6008, name: 'MACD Stoch ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6009: MACD + ADX + CCI Ʈ���� */
    static strategy6009(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 50;
        return { id: 6009, name: 'MACD ADX CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6010: MACD + ADX + Williams Ʈ���� */
    static strategy6010(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -40;
        return { id: 6010, name: 'MACD ADX Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6011: MACD + ADX + OBV Ʈ���� */
    static strategy6011(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6011, name: 'MACD ADX OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6012: MACD + ADX + ATR Ʈ���� */
    static strategy6012(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6012, name: 'MACD ADX ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6013: MACD + CCI + Williams Ʈ���� */
    static strategy6013(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.cci > 80 && ind.williamsR > -30;
        return { id: 6013, name: 'MACD CCI Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6014: MACD + CCI + OBV Ʈ���� */
    static strategy6014(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6014, name: 'MACD CCI OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6015: MACD + CCI + ATR Ʈ���� */
    static strategy6015(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.cci > 80 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6015, name: 'MACD CCI ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6016: MACD + Williams + OBV Ʈ���� */
    static strategy6016(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6016, name: 'MACD Williams OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6017: MACD + Williams + ATR Ʈ���� */
    static strategy6017(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6017, name: 'MACD Williams ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6018: MACD + OBV + ATR Ʈ���� */
    static strategy6018(ind) {
        const match = ind.macd?.MACD < ind.macd?.signal && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6018, name: 'MACD OBV ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6019: MACD ����ũ�ν� + BB + Stoch */
    static strategy6019(ind) {
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const match = macdCross && ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70;
        return { id: 6019, name: 'MACD Cross + BB Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6020: MACD ����ũ�ν� + EMA + ADX */
    static strategy6020(ind) {
        const macdCross = ind.macd?.MACD < ind.macd?.signal && ind.macd?.prevMACD >= ind.macd?.prevSignal;
        const match = macdCross && ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6020, name: 'MACD Cross + EMA ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** ���� 6021: MACD ������׷� ���� + BB + EMA */
    static strategy6021(ind) {
        const match = ind.macd?.histogram < 0 && ind.bollingerBands?.position > 60 && ind.ema20 < ind.ema50;
        return { id: 6021, name: 'MACD Hist Neg + BB EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6022: MACD ������׷� �϶� + Stoch + ADX */
    static strategy6022(ind) {
        const match = ind.macd?.histogram < ind.macd?.prevHistogram && ind.stochastic?.k > 60 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6022, name: 'MACD Hist Down + Stoch ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6023: MACD 0�� ���� + BB + Stoch */
    static strategy6023(ind) {
        const macdBreak = ind.macd?.MACD < 0 && ind.macd?.prevMACD >= 0;
        const match = macdBreak && ind.bollingerBands?.position > 50 && ind.stochastic?.k > 50;
        return { id: 6023, name: 'MACD Zero Break + BB Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6024: MACD ���� ���� + EMA + ADX */
    static strategy6024(ind) {
        const match = ind.macd?.histogram < -10 && ind.ema20 < ind.ema50 && ind.adx?.adx > 25;
        return { id: 6024, name: 'MACD Strong Neg + EMA ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6025: MACD ���� �϶� + BB + EMA */
    static strategy6025(ind) {
        const macdFalling = ind.macd?.histogram < ind.macd?.prevHistogram && ind.macd?.prevHistogram < ind.macd?.prev2Histogram;
        const match = macdFalling && ind.bollingerBands?.position > 55 && ind.ema20 < ind.ema50;
        return { id: 6025, name: 'MACD Falling + BB EMA', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    // ==================== BB ��� 3-��ǥ ���� (6026-6050) ====================
    
    /** ���� 6026: BB + EMA + CCI Ʈ���� */
    static strategy6026(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.cci > 80;
        return { id: 6026, name: 'BB EMA CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6027: BB + EMA + Williams Ʈ���� */
    static strategy6027(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && ind.williamsR > -30;
        return { id: 6027, name: 'BB EMA Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6028: BB + EMA + OBV Ʈ���� */
    static strategy6028(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6028, name: 'BB EMA OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6029: BB + EMA + ATR Ʈ���� */
    static strategy6029(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.ema20 < ind.ema50 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6029, name: 'BB EMA ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6030: BB + Stoch + CCI Ʈ���� */
    static strategy6030(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70 && ind.cci > 80;
        return { id: 6030, name: 'BB Stoch CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6031: BB + Stoch + Williams Ʈ���� */
    static strategy6031(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70 && ind.williamsR > -30;
        return { id: 6031, name: 'BB Stoch Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6032: BB + Stoch + OBV Ʈ���� */
    static strategy6032(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6032, name: 'BB Stoch OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6033: BB + Stoch + ATR Ʈ���� */
    static strategy6033(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.stochastic?.k > 70 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6033, name: 'BB Stoch ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6034: BB + ADX + CCI Ʈ���� */
    static strategy6034(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 50;
        return { id: 6034, name: 'BB ADX CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6035: BB + ADX + Williams Ʈ���� */
    static strategy6035(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -40;
        return { id: 6035, name: 'BB ADX Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6036: BB + ADX + OBV Ʈ���� */
    static strategy6036(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6036, name: 'BB ADX OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6037: BB + ADX + ATR Ʈ���� */
    static strategy6037(ind) {
        const match = ind.bollingerBands?.position > 65 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6037, name: 'BB ADX ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6038: BB + CCI + Williams Ʈ���� */
    static strategy6038(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.cci > 80 && ind.williamsR > -30;
        return { id: 6038, name: 'BB CCI Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6039: BB + CCI + OBV Ʈ���� */
    static strategy6039(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6039, name: 'BB CCI OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6040: BB + CCI + ATR Ʈ���� */
    static strategy6040(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.cci > 80 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6040, name: 'BB CCI ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6041: BB + Williams + OBV Ʈ���� */
    static strategy6041(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6041, name: 'BB Williams OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6042: BB + Williams + ATR Ʈ���� */
    static strategy6042(ind) {
        const match = ind.bollingerBands?.position > 70 && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6042, name: 'BB Williams ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6043: BB + OBV + ATR Ʈ���� */
    static strategy6043(ind) {
        const match = ind.bollingerBands?.position > 70 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6043, name: 'BB OBV ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6044: BB ��� ��Ż + EMA + Stoch */
    static strategy6044(ind) {
        const bbExit = ind.bollingerBands?.position < 85 && ind.bollingerBands?.prevPosition >= 85;
        const match = bbExit && ind.ema20 < ind.ema50 && ind.stochastic?.k < ind.stochastic?.prevK;
        return { id: 6044, name: 'BB Exit + EMA Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6045: BB ����� Ȯ�� + EMA + ADX */
    static strategy6045(ind) {
        const match = ind.bollingerBands?.bandwidth > ind.bollingerBands?.prevBandwidth && ind.ema20 < ind.ema50 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6045, name: 'BB Expand + EMA ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6046: BB �߰��� ���� + Stoch + CCI */
    static strategy6046(ind) {
        const bbBreak = ind.bollingerBands?.position < 50 && ind.bollingerBands?.prevPosition >= 50;
        const match = bbBreak && ind.stochastic?.k < ind.stochastic?.prevK && ind.cci < ind.prevCci;
        return { id: 6046, name: 'BB Mid Break + Stoch CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6047: BB ������ �� �϶� + EMA + ATR */
    static strategy6047(ind) {
        const squeeze = ind.bollingerBands?.prevBandwidth < 3 && ind.bollingerBands?.position < 45;
        const match = squeeze && ind.ema20 < ind.ema50 && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6047, name: 'BB Squeeze Down + EMA ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6048: BB 85%+ + Stoch + Williams ���ż� */
    static strategy6048(ind) {
        const match = ind.bollingerBands?.position > 85 && ind.stochastic?.k > 80 && ind.williamsR > -20;
        return { id: 6048, name: 'BB Stoch Williams Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6049: BB �϶� + ADX + OBV */
    static strategy6049(ind) {
        const match = ind.bollingerBands?.position < ind.bollingerBands?.prevPosition && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6049, name: 'BB Down + ADX OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6050: BB + EMA + SMA Ʈ���� ���� + RSI */
    static strategy6050(ind) {
        const match = ind.bollingerBands?.position < 45 && ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.rsi > 55;
        return { id: 6050, name: 'BB + Double MA Dead', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    // ==================== EMA/SMA ��� 3-��ǥ ���� (6051-6100) ====================
    
    /** ���� 6051: EMA + Stoch + CCI Ʈ���� */
    static strategy6051(ind) {
        const match = ind.ema20 < ind.ema50 && ind.stochastic?.k > 70 && ind.cci > 80;
        return { id: 6051, name: 'EMA Stoch CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6052: EMA + Stoch + Williams Ʈ���� */
    static strategy6052(ind) {
        const match = ind.ema20 < ind.ema50 && ind.stochastic?.k > 70 && ind.williamsR > -30 && ind.cci > 50;
        return { id: 6052, name: 'EMA Stoch Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6053: EMA + Stoch + OBV Ʈ���� */
    static strategy6053(ind) {
        const match = ind.ema20 < ind.ema50 && ind.stochastic?.k > 70 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6053, name: 'EMA Stoch OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6054: EMA + Stoch + ATR Ʈ���� */
    static strategy6054(ind) {
        const match = ind.ema20 < ind.ema50 && ind.stochastic?.k > 70 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6054, name: 'EMA Stoch ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6055: EMA + ADX + CCI Ʈ���� */
    static strategy6055(ind) {
        const match = ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 50;
        return { id: 6055, name: 'EMA ADX CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6056: EMA + ADX + Williams Ʈ���� */
    static strategy6056(ind) {
        const match = ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -40;
        return { id: 6056, name: 'EMA ADX Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6057: EMA + ADX + OBV Ʈ���� */
    static strategy6057(ind) {
        const match = ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6057, name: 'EMA ADX OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6058: EMA + ADX + ATR Ʈ���� */
    static strategy6058(ind) {
        const match = ind.ema20 < ind.ema50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6058, name: 'EMA ADX ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6059: EMA + CCI + Williams Ʈ���� */
    static strategy6059(ind) {
        const match = ind.ema20 < ind.ema50 && ind.cci > 80 && ind.williamsR > -30;
        return { id: 6059, name: 'EMA CCI Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6060: EMA + CCI + OBV Ʈ���� */
    static strategy6060(ind) {
        const match = ind.ema20 < ind.ema50 && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6060, name: 'EMA CCI OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6061: EMA + CCI + ATR Ʈ���� */
    static strategy6061(ind) {
        const match = ind.ema20 < ind.ema50 && ind.cci > 80 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6061, name: 'EMA CCI ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6062: EMA + Williams + OBV Ʈ���� */
    static strategy6062(ind) {
        const match = ind.ema20 < ind.ema50 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6062, name: 'EMA Williams OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6063: EMA + Williams + ATR Ʈ���� */
    static strategy6063(ind) {
        const match = ind.ema20 < ind.ema50 && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6063, name: 'EMA Williams ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6064: EMA + OBV + ATR Ʈ���� */
    static strategy6064(ind) {
        const match = ind.ema20 < ind.ema50 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.2;
        return { id: 6064, name: 'EMA OBV ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6065: EMA ����ũ�ν� + Stoch + ADX */
    static strategy6065(ind) {
        const emaCross = ind.ema20 < ind.ema50 && ind.prevEma20 >= ind.prevEma50;
        const match = emaCross && ind.stochastic?.k > 60 && ind.adx?.adx > 20;
        return { id: 6065, name: 'EMA Cross + Stoch ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6066: EMA ���迭 + Stoch + CCI */
    static strategy6066(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.stochastic?.k > 65 && ind.cci > 50;
        return { id: 6066, name: 'EMA Stack + Stoch CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6067: EMA ���迭 + ADX + Williams */
    static strategy6067(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -40;
        return { id: 6067, name: 'EMA Stack + ADX Williams', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 6068: ���� < EMA20 + Stoch + CCI */
    static strategy6068(ind) {
        const match = ind.price < ind.ema20 && ind.stochastic?.k > 60 && ind.cci > 50;
        return { id: 6068, name: 'Below EMA + Stoch CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 6069: ���� < EMA20 + ADX + OBV */
    static strategy6069(ind) {
        const match = ind.price < ind.ema20 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6069, name: 'Below EMA + ADX OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6070: EMA + SMA ���� + Stoch */
    static strategy6070(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.stochastic?.k > 65;
        return { id: 6070, name: 'Double MA Dead + Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6071: EMA + SMA ���� + ADX */
    static strategy6071(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6071, name: 'Double MA Dead + ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6072: EMA + SMA ���� + CCI */
    static strategy6072(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.cci > 60;
        return { id: 6072, name: 'Double MA Dead + CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6073: EMA + SMA ���� + Williams */
    static strategy6073(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.williamsR > -35;
        return { id: 6073, name: 'Double MA Dead + Williams', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6074: EMA + SMA ���� + OBV */
    static strategy6074(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6074, name: 'Double MA Dead + OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6075: EMA + SMA ���� + ATR */
    static strategy6075(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6075, name: 'Double MA Dead + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6076: SMA + Stoch + CCI Ʈ���� */
    static strategy6076(ind) {
        const match = ind.sma20 < ind.sma50 && ind.stochastic?.k > 70 && ind.cci > 80;
        return { id: 6076, name: 'SMA Stoch CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6077: SMA + Stoch + Williams Ʈ���� */
    static strategy6077(ind) {
        const match = ind.sma20 < ind.sma50 && ind.stochastic?.k > 70 && ind.williamsR > -30;
        return { id: 6077, name: 'SMA Stoch Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6078: SMA + ADX + CCI Ʈ���� */
    static strategy6078(ind) {
        const match = ind.sma20 < ind.sma50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 50;
        return { id: 6078, name: 'SMA ADX CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6079: SMA + ADX + Williams Ʈ���� */
    static strategy6079(ind) {
        const match = ind.sma20 < ind.sma50 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -40;
        return { id: 6079, name: 'SMA ADX Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6080: SMA + CCI + Williams Ʈ���� */
    static strategy6080(ind) {
        const match = ind.sma20 < ind.sma50 && ind.cci > 80 && ind.williamsR > -30;
        return { id: 6080, name: 'SMA CCI Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6081: SMA + CCI + OBV Ʈ���� */
    static strategy6081(ind) {
        const match = ind.sma20 < ind.sma50 && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6081, name: 'SMA CCI OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6082: SMA + Williams + ATR Ʈ���� */
    static strategy6082(ind) {
        const match = ind.sma20 < ind.sma50 && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6082, name: 'SMA Williams ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6083: SMA + OBV + ATR Ʈ���� */
    static strategy6083(ind) {
        const match = ind.sma20 < ind.sma50 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6083, name: 'SMA OBV ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 6084: ���� < SMA20 + Stoch + ADX */
    static strategy6084(ind) {
        const match = ind.price < ind.sma20 && ind.stochastic?.k > 55 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6084, name: 'Below SMA + Stoch ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6085: ���� < ��� MA + Stoch */
    static strategy6085(ind) {
        const match = ind.price < ind.ema20 && ind.price < ind.sma20 && ind.stochastic?.k > 55;
        return { id: 6085, name: 'Below All MA + Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6086: ���� < ��� MA + ADX */
    static strategy6086(ind) {
        const match = ind.price < ind.ema20 && ind.price < ind.sma20 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6086, name: 'Below All MA + ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6087: ���� < ��� MA + CCI */
    static strategy6087(ind) {
        const match = ind.price < ind.ema20 && ind.price < ind.sma20 && ind.cci > 30;
        return { id: 6087, name: 'Below All MA + CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 6088: ���� < ��� MA + OBV */
    static strategy6088(ind) {
        const match = ind.price < ind.ema20 && ind.price < ind.sma20 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6088, name: 'Below All MA + OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6089: EMA �϶� + SMA �϶� + Stoch */
    static strategy6089(ind) {
        const match = ind.ema20 < ind.prevEma20 && ind.sma20 < ind.prevSma20 && ind.stochastic?.k > 55;
        return { id: 6089, name: 'MA Falling + Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 6090: EMA �϶� + SMA �϶� + ADX */
    static strategy6090(ind) {
        const match = ind.ema20 < ind.prevEma20 && ind.sma20 < ind.prevSma20 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6090, name: 'MA Falling + ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6091: EMA �϶� + SMA �϶� + CCI */
    static strategy6091(ind) {
        const match = ind.ema20 < ind.prevEma20 && ind.sma20 < ind.prevSma20 && ind.cci > 30;
        return { id: 6091, name: 'MA Falling + CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 76 : 0 };
    }
    
    /** ���� 6092: EMA �϶� + SMA �϶� + Williams */
    static strategy6092(ind) {
        const match = ind.ema20 < ind.prevEma20 && ind.sma20 < ind.prevSma20 && ind.williamsR > -45;
        return { id: 6092, name: 'MA Falling + Williams', direction: 'DOWN', match: Boolean(match), confidence: match ? 75 : 0 };
    }
    
    /** ���� 6093: EMA �϶� + SMA �϶� + OBV */
    static strategy6093(ind) {
        const match = ind.ema20 < ind.prevEma20 && ind.sma20 < ind.prevSma20 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6093, name: 'MA Falling + OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 77 : 0 };
    }
    
    /** ���� 6094: EMA �϶� + SMA �϶� + ATR */
    static strategy6094(ind) {
        const match = ind.ema20 < ind.prevEma20 && ind.sma20 < ind.prevSma20 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6094, name: 'MA Falling + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6095: EMA ���迭 + CCI + OBV */
    static strategy6095(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.cci > 50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6095, name: 'EMA Stack + CCI OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6096: EMA ���迭 + Williams + ATR */
    static strategy6096(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && ind.williamsR > -40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6096, name: 'EMA Stack + Williams ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6097: EMA ���迭 + OBV + ATR */
    static strategy6097(ind) {
        const match = ind.ema20 < ind.ema50 && ind.ema50 < ind.ema100 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6097, name: 'EMA Stack + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6098: ���� < EMA < SMA + Stoch */
    static strategy6098(ind) {
        const match = ind.price < ind.ema20 && ind.ema20 < ind.sma20 && ind.stochastic?.k > 50;
        return { id: 6098, name: 'Price Below EMA SMA + Stoch', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6099: ���� < EMA < SMA + ADX */
    static strategy6099(ind) {
        const match = ind.price < ind.ema20 && ind.ema20 < ind.sma20 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6099, name: 'Price Below EMA SMA + ADX', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6100: MA Ʈ���� ���̽� */
    static strategy6100(ind) {
        const match = ind.ema20 < ind.ema50 && ind.sma20 < ind.sma50 && ind.price < ind.ema20;
        return { id: 6100, name: 'MA Triple Base Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    // ==================== Stoch ��� 3-��ǥ ���� (6101-6150) ====================
    
    /** ���� 6101: Stoch + ADX + CCI Ʈ���� */
    static strategy6101(ind) {
        const match = ind.stochastic?.k > 70 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 50;
        return { id: 6101, name: 'Stoch ADX CCI Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6102: Stoch + ADX + Williams Ʈ���� */
    static strategy6102(ind) {
        const match = ind.stochastic?.k > 70 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -35;
        return { id: 6102, name: 'Stoch ADX Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6103: Stoch + ADX + OBV Ʈ���� */
    static strategy6103(ind) {
        const match = ind.stochastic?.k > 70 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6103, name: 'Stoch ADX OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6104: Stoch + ADX + ATR Ʈ���� */
    static strategy6104(ind) {
        const match = ind.stochastic?.k > 70 && ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6104, name: 'Stoch ADX ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6105: Stoch + CCI + Williams Ʈ���� */
    static strategy6105(ind) {
        const match = ind.stochastic?.k > 70 && ind.cci > 80 && ind.williamsR > -25;
        return { id: 6105, name: 'Stoch CCI Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6106: Stoch + CCI + OBV Ʈ���� */
    static strategy6106(ind) {
        const match = ind.stochastic?.k > 70 && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6106, name: 'Stoch CCI OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6107: Stoch + CCI + ATR Ʈ���� */
    static strategy6107(ind) {
        const match = ind.stochastic?.k > 70 && ind.cci > 80 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6107, name: 'Stoch CCI ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6108: Stoch + Williams + OBV Ʈ���� */
    static strategy6108(ind) {
        const match = ind.stochastic?.k > 70 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6108, name: 'Stoch Williams OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6109: Stoch + Williams + ATR Ʈ���� */
    static strategy6109(ind) {
        const match = ind.stochastic?.k > 70 && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6109, name: 'Stoch Williams ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6110: Stoch + OBV + ATR Ʈ���� */
    static strategy6110(ind) {
        const match = ind.stochastic?.k > 70 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6110, name: 'Stoch OBV ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6111: Stoch ����ũ�ν� + ADX + CCI */
    static strategy6111(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = stochCross && ind.adx?.adx > 20 && ind.cci > 40;
        return { id: 6111, name: 'Stoch Cross + ADX CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6112: Stoch ����ũ�ν� + ADX + Williams */
    static strategy6112(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = stochCross && ind.adx?.adx > 20 && ind.williamsR > -45;
        return { id: 6112, name: 'Stoch Cross + ADX Williams', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6113: Stoch ����ũ�ν� + CCI + OBV */
    static strategy6113(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = stochCross && ind.cci > 30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6113, name: 'Stoch Cross + CCI OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6114: Stoch ����ũ�ν� + Williams + ATR */
    static strategy6114(ind) {
        const stochCross = ind.stochastic?.k < ind.stochastic?.d && ind.stochastic?.prevK >= ind.stochastic?.prevD;
        const match = stochCross && ind.williamsR > -45 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6114, name: 'Stoch Cross + Williams ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6115: Stoch 80 ��Ż + ADX + CCI */
    static strategy6115(ind) {
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const match = stochExit && ind.adx?.adx > 20 && ind.cci > 30;
        return { id: 6115, name: 'Stoch Exit + ADX CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6116: Stoch 80 ��Ż + Williams + OBV */
    static strategy6116(ind) {
        const stochExit = ind.stochastic?.k < 80 && ind.stochastic?.prevK >= 80;
        const match = stochExit && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6116, name: 'Stoch Exit + Williams OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6117: Stoch �϶� + ADX ��� + CCI �϶� */
    static strategy6117(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.prevK && ind.adx?.adx > ind.adx?.prevAdx && ind.cci < ind.prevCci;
        return { id: 6117, name: 'Stoch + ADX + CCI Momentum', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6118: Stoch �϶� + Williams �϶� + OBV �϶� */
    static strategy6118(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.prevK && ind.williamsR < ind.prevWilliamsR && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6118, name: 'Stoch + Williams + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6119: Stoch �϶� + CCI �϶� + ATR ��� */
    static strategy6119(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.prevK && ind.cci < ind.prevCci && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6119, name: 'Stoch CCI Down + ATR Up', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6120: Stoch > 85 + ADX > 30 + -DI */
    static strategy6120(ind) {
        const match = ind.stochastic?.k > 85 && ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6120, name: 'Stoch 85 + ADX 30 Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6121: Stoch > 85 + CCI > 150 */
    static strategy6121(ind) {
        const match = ind.stochastic?.k > 85 && ind.cci > 150;
        return { id: 6121, name: 'Stoch + CCI Extreme OB', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 6122: Stoch > 85 + Williams > -15 */
    static strategy6122(ind) {
        const match = ind.stochastic?.k > 85 && ind.williamsR > -15;
        return { id: 6122, name: 'Stoch + Williams Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 6123: Stoch > 80 + OBV ���̹����� + ATR ��� */
    static strategy6123(ind) {
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = ind.stochastic?.k > 80 && obvDiv && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6123, name: 'Stoch OB + OBV Div + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6124: Stoch 50�� ���� + ADX + Williams */
    static strategy6124(ind) {
        const stochBreak = ind.stochastic?.k < 50 && ind.stochastic?.prevK >= 50;
        const match = stochBreak && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR < ind.prevWilliamsR;
        return { id: 6124, name: 'Stoch 50 Break + ADX W', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6125: Stoch + %K < %D + ADX + CCI */
    static strategy6125(ind) {
        const match = ind.stochastic?.k < ind.stochastic?.d && ind.adx?.adx > 20 && ind.cci > 20;
        return { id: 6125, name: 'Stoch Dead + ADX + CCI', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    // ==================== ADX ��� 3-��ǥ ���� (6126-6150) ====================
    
    /** ���� 6126: ADX + CCI + Williams Ʈ���� */
    static strategy6126(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 80 && ind.williamsR > -25;
        return { id: 6126, name: 'ADX CCI Williams Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6127: ADX + CCI + OBV Ʈ���� */
    static strategy6127(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6127, name: 'ADX CCI OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6128: ADX + CCI + ATR Ʈ���� */
    static strategy6128(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 80 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6128, name: 'ADX CCI ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6129: ADX + Williams + OBV Ʈ���� */
    static strategy6129(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6129, name: 'ADX Williams OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6130: ADX + Williams + ATR Ʈ���� */
    static strategy6130(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6130, name: 'ADX Williams ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6131: ADX + OBV + ATR Ʈ���� */
    static strategy6131(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6131, name: 'ADX OBV ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6132: DI ����ũ�ν� + CCI + Williams */
    static strategy6132(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = diCross && ind.cci > 50 && ind.williamsR > -40;
        return { id: 6132, name: 'DI Cross + CCI Williams', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6133: DI ����ũ�ν� + CCI + OBV */
    static strategy6133(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = diCross && ind.cci > 50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6133, name: 'DI Cross + CCI OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6134: DI ����ũ�ν� + Williams + ATR */
    static strategy6134(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = diCross && ind.williamsR > -40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6134, name: 'DI Cross + Williams ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6135: DI ����ũ�ν� + OBV + ATR */
    static strategy6135(ind) {
        const diCross = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.prevMinusDI <= ind.adx?.prevPlusDI;
        const match = diCross && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6135, name: 'DI Cross + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6136: ADX > 30 + CCI > 100 + Williams > -25 */
    static strategy6136(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 100 && ind.williamsR > -25;
        return { id: 6136, name: 'ADX 30 + CCI 100 + Williams', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 6137: ADX > 30 + CCI > 100 + OBV �϶� */
    static strategy6137(ind) {
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 100 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6137, name: 'ADX 30 + CCI 100 + OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6138: ADX > 30 + Williams > -20 + ATR �޵� */
    static strategy6138(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.adx?.adx > 30 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR > -20 && atrSpike;
        return { id: 6138, name: 'ADX 30 + Williams + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 86 : 0 };
    }
    
    /** ���� 6139: ADX ��� + CCI �϶� + Williams �϶� */
    static strategy6139(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.cci < ind.prevCci && ind.williamsR < ind.prevWilliamsR;
        return { id: 6139, name: 'ADX Up + CCI Williams Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6140: ADX ��� + OBV �϶� + ATR ��� */
    static strategy6140(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6140, name: 'ADX Up + OBV Down + ATR Up', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6141: -DI > +DI > 25 + CCI + Williams */
    static strategy6141(ind) {
        const match = ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.minusDI > 25 && ind.cci > 50 && ind.williamsR > -40;
        return { id: 6141, name: 'Strong -DI + CCI Williams', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6142: -DI > 30 + OBV �϶� + ATR > ��� */
    static strategy6142(ind) {
        const match = ind.adx?.minusDI > 30 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6142, name: 'Strong -DI + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6143: ADX > 35 + CCI �϶� + OBV �϶� */
    static strategy6143(ind) {
        const match = ind.adx?.adx > 35 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci < ind.prevCci && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6143, name: 'ADX 35 + CCI OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6144: ADX > 35 + Williams �϶� + ATR ��� */
    static strategy6144(ind) {
        const match = ind.adx?.adx > 35 && ind.adx?.minusDI > ind.adx?.plusDI && ind.williamsR < ind.prevWilliamsR && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6144, name: 'ADX 35 + Williams ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6145: ADX �ְ��� + CCI + OBV */
    static strategy6145(ind) {
        const match = ind.adx?.adx > 40 && ind.adx?.minusDI > ind.adx?.plusDI && ind.cci > 30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6145, name: 'ADX Peak + CCI OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 6146: ADX ��� + -DI ��� + CCI �϶� */
    static strategy6146(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.prevMinusDI && ind.cci < ind.prevCci;
        return { id: 6146, name: 'ADX -DI Up + CCI Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6147: ADX ��� + -DI ��� + Williams �϶� */
    static strategy6147(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.prevMinusDI && ind.williamsR < ind.prevWilliamsR;
        return { id: 6147, name: 'ADX -DI Up + Williams Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6148: ADX ��� + -DI ��� + OBV �϶� */
    static strategy6148(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.prevMinusDI && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6148, name: 'ADX -DI Up + OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6149: ADX + -DI + ATR ��� ��� */
    static strategy6149(ind) {
        const match = ind.adx?.adx > ind.adx?.prevAdx && ind.adx?.minusDI > ind.adx?.prevMinusDI && 
                     (ind.atr || 0) > (ind.prevAtr || 0) && ind.adx?.minusDI > ind.adx?.plusDI;
        return { id: 6149, name: 'ADX -DI ATR All Rising', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6150: ADX Ʈ���� ���̽� */
    static strategy6150(ind) {
        const match = ind.adx?.adx > 25 && ind.adx?.minusDI > ind.adx?.plusDI && ind.adx?.minusDI > 20;
        return { id: 6150, name: 'ADX Triple Base Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    // ==================== CCI/Williams/OBV/ATR ��� 3-��ǥ ���� (6151-6200) ====================
    
    /** ���� 6151: CCI + Williams + OBV Ʈ���� */
    static strategy6151(ind) {
        const match = ind.cci > 80 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6151, name: 'CCI Williams OBV Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6152: CCI + Williams + ATR Ʈ���� */
    static strategy6152(ind) {
        const match = ind.cci > 80 && ind.williamsR > -30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6152, name: 'CCI Williams ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6153: CCI + OBV + ATR Ʈ���� */
    static strategy6153(ind) {
        const match = ind.cci > 80 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6153, name: 'CCI OBV ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6154: Williams + OBV + ATR Ʈ���� */
    static strategy6154(ind) {
        const match = ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6154, name: 'Williams OBV ATR Triple', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6155: CCI > 100 + Williams > -20 + OBV �϶� */
    static strategy6155(ind) {
        const match = ind.cci > 100 && ind.williamsR > -20 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6155, name: 'CCI Williams OBV Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6156: CCI > 100 + Williams > -20 + ATR �޵� */
    static strategy6156(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.cci > 100 && ind.williamsR > -20 && atrSpike;
        return { id: 6156, name: 'CCI Williams ATR Extreme', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6157: CCI > 150 + OBV �϶� + ATR �޵� */
    static strategy6157(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.cci > 150 && (ind.obv || 0) < (ind.prevObv || 0) && atrSpike;
        return { id: 6157, name: 'CCI 150 + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6158: Williams > -15 + OBV �϶� + ATR �޵� */
    static strategy6158(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = ind.williamsR > -15 && (ind.obv || 0) < (ind.prevObv || 0) && atrSpike;
        return { id: 6158, name: 'Williams -15 + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6159: CCI 100 ��Ż + Williams ��Ż + OBV */
    static strategy6159(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = cciExit && wExit && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6159, name: 'CCI Williams Exit + OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6160: CCI 100 ��Ż + Williams ��Ż + ATR */
    static strategy6160(ind) {
        const cciExit = ind.cci < 100 && ind.prevCci >= 100;
        const wExit = ind.williamsR < -20 && ind.prevWilliamsR >= -20;
        const match = cciExit && wExit && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6160, name: 'CCI Williams Exit + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6161: CCI �϶� + Williams �϶� + OBV �϶� */
    static strategy6161(ind) {
        const match = ind.cci < ind.prevCci && ind.williamsR < ind.prevWilliamsR && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6161, name: 'CCI Williams OBV All Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6162: CCI �϶� + Williams �϶� + ATR ��� */
    static strategy6162(ind) {
        const match = ind.cci < ind.prevCci && ind.williamsR < ind.prevWilliamsR && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6162, name: 'CCI Williams Down + ATR Up', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6163: CCI �϶� + OBV �϶� + ATR ��� */
    static strategy6163(ind) {
        const match = ind.cci < ind.prevCci && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6163, name: 'CCI OBV Down + ATR Up', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6164: Williams �϶� + OBV �϶� + ATR ��� */
    static strategy6164(ind) {
        const match = ind.williamsR < ind.prevWilliamsR && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6164, name: 'Williams OBV Down + ATR Up', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6165: CCI 0�� ���� + Williams 50�� ���� + OBV */
    static strategy6165(ind) {
        const cciBreak = ind.cci < 0 && ind.prevCci >= 0;
        const wBreak = ind.williamsR < -50 && ind.prevWilliamsR >= -50;
        const match = cciBreak && wBreak && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6165, name: 'CCI W Zero Break + OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6166: CCI 0�� ���� + OBV �϶� + ATR ��� */
    static strategy6166(ind) {
        const cciBreak = ind.cci < 0 && ind.prevCci >= 0;
        const match = cciBreak && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6166, name: 'CCI Zero Break + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6167: Williams -50 ���� + OBV �϶� + ATR ��� */
    static strategy6167(ind) {
        const wBreak = ind.williamsR < -50 && ind.prevWilliamsR >= -50;
        const match = wBreak && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6167, name: 'Williams -50 Break + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6168: CCI + Williams ���̹����� + OBV */
    static strategy6168(ind) {
        const cciDiv = ind.priceChange > 0 && ind.cci < ind.prevCci;
        const wDiv = ind.priceChange > 0 && ind.williamsR < ind.prevWilliamsR;
        const match = cciDiv && wDiv && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6168, name: 'CCI W Div + OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6169: CCI + OBV ���̹����� + ATR ��� */
    static strategy6169(ind) {
        const cciDiv = ind.priceChange > 0 && ind.cci < ind.prevCci;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = cciDiv && obvDiv && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6169, name: 'CCI OBV Div + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6170: Williams + OBV ���̹����� + ATR ��� */
    static strategy6170(ind) {
        const wDiv = ind.priceChange > 0 && ind.williamsR < ind.prevWilliamsR;
        const obvDiv = ind.priceChange > 0 && (ind.obv || 0) < (ind.prevObv || 0);
        const match = wDiv && obvDiv && (ind.atr || 0) > (ind.prevAtr || 0);
        return { id: 6170, name: 'Williams OBV Div + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6171: CCI ���� �϶� + Williams + OBV */
    static strategy6171(ind) {
        const cciFalling = ind.cci < ind.prevCci && ind.prevCci < ind.prev2Cci;
        const match = cciFalling && ind.williamsR > -50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6171, name: 'CCI Falling + Williams OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6172: CCI ���� �϶� + OBV + ATR */
    static strategy6172(ind) {
        const cciFalling = ind.cci < ind.prevCci && ind.prevCci < ind.prev2Cci;
        const match = cciFalling && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6172, name: 'CCI Falling + OBV ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6173: Williams ���� �϶� + CCI + ATR */
    static strategy6173(ind) {
        const wFalling = ind.williamsR < ind.prevWilliamsR && ind.prevWilliamsR < ind.prev2WilliamsR;
        const match = wFalling && ind.cci > 0 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6173, name: 'Williams Falling + CCI ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6174: OBV �϶� + CCI + Williams */
    static strategy6174(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = obvFalling && ind.cci > 30 && ind.williamsR > -50;
        return { id: 6174, name: 'OBV Down + CCI Williams', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6175: OBV �϶� + CCI + ATR */
    static strategy6175(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = obvFalling && ind.cci > 30 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6175, name: 'OBV Down + CCI ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6176: OBV �϶� + Williams + ATR */
    static strategy6176(ind) {
        const obvFalling = (ind.obv || 0) < (ind.prevObv || 0);
        const match = obvFalling && ind.williamsR > -50 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6176, name: 'OBV Down + Williams ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6177: ATR �޵� + CCI �϶� + Williams �϶� */
    static strategy6177(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.cci < ind.prevCci && ind.williamsR < ind.prevWilliamsR;
        return { id: 6177, name: 'ATR Spike + CCI W Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6178: ATR �޵� + CCI �϶� + OBV �϶� */
    static strategy6178(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.cci < ind.prevCci && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6178, name: 'ATR Spike + CCI OBV Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6179: ATR �޵� + Williams �϶� + OBV �϶� */
    static strategy6179(ind) {
        const atrSpike = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        const match = atrSpike && ind.williamsR < ind.prevWilliamsR && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6179, name: 'ATR Spike + Williams OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6180: ATR > 2x ��� + CCI + Williams */
    static strategy6180(ind) {
        const atrExtreme = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 2;
        const match = atrExtreme && ind.cci > 50 && ind.williamsR > -40;
        return { id: 6180, name: 'ATR 2x + CCI Williams', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6181: ATR > 2x ��� + CCI + OBV */
    static strategy6181(ind) {
        const atrExtreme = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 2;
        const match = atrExtreme && ind.cci > 50 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6181, name: 'ATR 2x + CCI OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6182: ATR > 2x ��� + Williams + OBV */
    static strategy6182(ind) {
        const atrExtreme = (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 2;
        const match = atrExtreme && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0);
        return { id: 6182, name: 'ATR 2x + Williams OBV', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6183: CCI > 120 + Williams > -15 + ATR > 1.5x */
    static strategy6183(ind) {
        const match = ind.cci > 120 && ind.williamsR > -15 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        return { id: 6183, name: 'CCI Williams ATR Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 6184: CCI > 120 + OBV �޶� + ATR > 1.5x */
    static strategy6184(ind) {
        const obvDrop = ((ind.prevObv || 0) - (ind.obv || 0)) / Math.abs((ind.prevObv || 0)) > 0.03;
        const match = ind.cci > 120 && obvDrop && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        return { id: 6184, name: 'CCI OBV Drop + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6185: Williams > -10 + OBV �޶� + ATR > 1.5x */
    static strategy6185(ind) {
        const obvDrop = ((ind.prevObv || 0) - (ind.obv || 0)) / Math.abs((ind.prevObv || 0)) > 0.03;
        const match = ind.williamsR > -10 && obvDrop && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.5;
        return { id: 6185, name: 'Williams OBV Drop + ATR', direction: 'DOWN', match: Boolean(match), confidence: match ? 84 : 0 };
    }
    
    /** ���� 6186: CCI + Williams + OBV + �϶� ĵ�� */
    static strategy6186(ind) {
        const match = ind.cci > 50 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && ind.priceChange < 0;
        return { id: 6186, name: 'CCI W OBV + Down Candle', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6187: CCI + Williams + ATR + �϶� ĵ�� */
    static strategy6187(ind) {
        const match = ind.cci > 50 && ind.williamsR > -40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.priceChange < 0;
        return { id: 6187, name: 'CCI W ATR + Down Candle', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6188: CCI + OBV + ATR + �϶� ĵ�� */
    static strategy6188(ind) {
        const match = ind.cci > 50 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.priceChange < 0;
        return { id: 6188, name: 'CCI OBV ATR + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6189: Williams + OBV + ATR + �϶� ĵ�� */
    static strategy6189(ind) {
        const match = ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.priceChange < 0;
        return { id: 6189, name: 'Williams OBV ATR + Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6190: CCI + Williams + ���� �϶� */
    static strategy6190(ind) {
        const match = ind.cci > 50 && ind.williamsR > -40 && ind.consecutiveDown >= 2;
        return { id: 6190, name: 'CCI W + Consecutive Down', direction: 'DOWN', match: Boolean(match), confidence: match ? 78 : 0 };
    }
    
    /** ���� 6191: CCI + OBV + ���� �϶� */
    static strategy6191(ind) {
        const match = ind.cci > 50 && (ind.obv || 0) < (ind.prevObv || 0) && ind.consecutiveDown >= 2;
        return { id: 6191, name: 'CCI OBV + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6192: Williams + ATR + ���� �϶� */
    static strategy6192(ind) {
        const match = ind.williamsR > -40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.consecutiveDown >= 2;
        return { id: 6192, name: 'Williams ATR + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 79 : 0 };
    }
    
    /** ���� 6193: OBV + ATR + ���� �϶� */
    static strategy6193(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.consecutiveDown >= 2;
        return { id: 6193, name: 'OBV ATR + Consecutive', direction: 'DOWN', match: Boolean(match), confidence: match ? 80 : 0 };
    }
    
    /** ���� 6194: CCI + Williams + �ŷ��� ���� */
    static strategy6194(ind) {
        const match = ind.cci > 50 && ind.williamsR > -40 && ind.volume > ind.avgVolume * 1.5 && ind.priceChange < 0;
        return { id: 6194, name: 'CCI W + Volume Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 81 : 0 };
    }
    
    /** ���� 6195: CCI + OBV + �ŷ��� ���� */
    static strategy6195(ind) {
        const match = ind.cci > 50 && (ind.obv || 0) < (ind.prevObv || 0) && ind.volume > ind.avgVolume * 1.5;
        return { id: 6195, name: 'CCI OBV + Volume Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6196: Williams + ATR + �ŷ��� ���� */
    static strategy6196(ind) {
        const match = ind.williamsR > -40 && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) && ind.volume > ind.avgVolume * 1.5 && ind.priceChange < 0;
        return { id: 6196, name: 'Williams ATR + Volume', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ���� 6197: OBV + ATR + �ŷ��� ���� */
    static strategy6197(ind) {
        const match = (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.3 && ind.volume > ind.avgVolume * 1.5;
        return { id: 6197, name: 'OBV ATR + Volume Spike', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6198: CCI + Williams + OBV + ATR ���� */
    static strategy6198(ind) {
        const match = ind.cci > 50 && ind.williamsR > -40 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6198, name: 'CCI W OBV ATR Quad', direction: 'DOWN', match: Boolean(match), confidence: match ? 83 : 0 };
    }
    
    /** ���� 6199: CCI/Williams/OBV/ATR ��� ���� ���� */
    static strategy6199(ind) {
        const match = ind.cci > 80 && ind.williamsR > -30 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0) * 1.2;
        return { id: 6199, name: 'CCI W OBV ATR Strong', direction: 'DOWN', match: Boolean(match), confidence: match ? 85 : 0 };
    }
    
    /** ���� 6200: 3-��ǥ ���� ���Ͻ��� */
    static strategy6200(ind) {
        const match = ind.cci > 60 && ind.williamsR > -35 && (ind.obv || 0) < (ind.prevObv || 0) && (ind.atr || 0) > (ind.avgAtr || ind.atr || 0);
        return { id: 6200, name: 'Triple Indicator Milestone', direction: 'DOWN', match: Boolean(match), confidence: match ? 82 : 0 };
    }
    
    /** ��� ���� ���� (6001-6200) */
    static analyzeAll(indicators) {
        return [
            this.strategy6001(indicators), this.strategy6002(indicators), this.strategy6003(indicators),
            this.strategy6004(indicators), this.strategy6005(indicators), this.strategy6006(indicators),
            this.strategy6007(indicators), this.strategy6008(indicators), this.strategy6009(indicators),
            this.strategy6010(indicators), this.strategy6011(indicators), this.strategy6012(indicators),
            this.strategy6013(indicators), this.strategy6014(indicators), this.strategy6015(indicators),
            this.strategy6016(indicators), this.strategy6017(indicators), this.strategy6018(indicators),
            this.strategy6019(indicators), this.strategy6020(indicators), this.strategy6021(indicators),
            this.strategy6022(indicators), this.strategy6023(indicators), this.strategy6024(indicators),
            this.strategy6025(indicators), this.strategy6026(indicators), this.strategy6027(indicators),
            this.strategy6028(indicators), this.strategy6029(indicators), this.strategy6030(indicators),
            this.strategy6031(indicators), this.strategy6032(indicators), this.strategy6033(indicators),
            this.strategy6034(indicators), this.strategy6035(indicators), this.strategy6036(indicators),
            this.strategy6037(indicators), this.strategy6038(indicators), this.strategy6039(indicators),
            this.strategy6040(indicators), this.strategy6041(indicators), this.strategy6042(indicators),
            this.strategy6043(indicators), this.strategy6044(indicators), this.strategy6045(indicators),
            this.strategy6046(indicators), this.strategy6047(indicators), this.strategy6048(indicators),
            this.strategy6049(indicators), this.strategy6050(indicators), this.strategy6051(indicators),
            this.strategy6052(indicators), this.strategy6053(indicators), this.strategy6054(indicators),
            this.strategy6055(indicators), this.strategy6056(indicators), this.strategy6057(indicators),
            this.strategy6058(indicators), this.strategy6059(indicators), this.strategy6060(indicators),
            this.strategy6061(indicators), this.strategy6062(indicators), this.strategy6063(indicators),
            this.strategy6064(indicators), this.strategy6065(indicators), this.strategy6066(indicators),
            this.strategy6067(indicators), this.strategy6068(indicators), this.strategy6069(indicators),
            this.strategy6070(indicators), this.strategy6071(indicators), this.strategy6072(indicators),
            this.strategy6073(indicators), this.strategy6074(indicators), this.strategy6075(indicators),
            this.strategy6076(indicators), this.strategy6077(indicators), this.strategy6078(indicators),
            this.strategy6079(indicators), this.strategy6080(indicators), this.strategy6081(indicators),
            this.strategy6082(indicators), this.strategy6083(indicators), this.strategy6084(indicators),
            this.strategy6085(indicators), this.strategy6086(indicators), this.strategy6087(indicators),
            this.strategy6088(indicators), this.strategy6089(indicators), this.strategy6090(indicators),
            this.strategy6091(indicators), this.strategy6092(indicators), this.strategy6093(indicators),
            this.strategy6094(indicators), this.strategy6095(indicators), this.strategy6096(indicators),
            this.strategy6097(indicators), this.strategy6098(indicators), this.strategy6099(indicators),
            this.strategy6100(indicators), this.strategy6101(indicators), this.strategy6102(indicators),
            this.strategy6103(indicators), this.strategy6104(indicators), this.strategy6105(indicators),
            this.strategy6106(indicators), this.strategy6107(indicators), this.strategy6108(indicators),
            this.strategy6109(indicators), this.strategy6110(indicators), this.strategy6111(indicators),
            this.strategy6112(indicators), this.strategy6113(indicators), this.strategy6114(indicators),
            this.strategy6115(indicators), this.strategy6116(indicators), this.strategy6117(indicators),
            this.strategy6118(indicators), this.strategy6119(indicators), this.strategy6120(indicators),
            this.strategy6121(indicators), this.strategy6122(indicators), this.strategy6123(indicators),
            this.strategy6124(indicators), this.strategy6125(indicators), this.strategy6126(indicators),
            this.strategy6127(indicators), this.strategy6128(indicators), this.strategy6129(indicators),
            this.strategy6130(indicators), this.strategy6131(indicators), this.strategy6132(indicators),
            this.strategy6133(indicators), this.strategy6134(indicators), this.strategy6135(indicators),
            this.strategy6136(indicators), this.strategy6137(indicators), this.strategy6138(indicators),
            this.strategy6139(indicators), this.strategy6140(indicators), this.strategy6141(indicators),
            this.strategy6142(indicators), this.strategy6143(indicators), this.strategy6144(indicators),
            this.strategy6145(indicators), this.strategy6146(indicators), this.strategy6147(indicators),
            this.strategy6148(indicators), this.strategy6149(indicators), this.strategy6150(indicators),
            this.strategy6151(indicators), this.strategy6152(indicators), this.strategy6153(indicators),
            this.strategy6154(indicators), this.strategy6155(indicators), this.strategy6156(indicators),
            this.strategy6157(indicators), this.strategy6158(indicators), this.strategy6159(indicators),
            this.strategy6160(indicators), this.strategy6161(indicators), this.strategy6162(indicators),
            this.strategy6163(indicators), this.strategy6164(indicators), this.strategy6165(indicators),
            this.strategy6166(indicators), this.strategy6167(indicators), this.strategy6168(indicators),
            this.strategy6169(indicators), this.strategy6170(indicators), this.strategy6171(indicators),
            this.strategy6172(indicators), this.strategy6173(indicators), this.strategy6174(indicators),
            this.strategy6175(indicators), this.strategy6176(indicators), this.strategy6177(indicators),
            this.strategy6178(indicators), this.strategy6179(indicators), this.strategy6180(indicators),
            this.strategy6181(indicators), this.strategy6182(indicators), this.strategy6183(indicators),
            this.strategy6184(indicators), this.strategy6185(indicators), this.strategy6186(indicators),
            this.strategy6187(indicators), this.strategy6188(indicators), this.strategy6189(indicators),
            this.strategy6190(indicators), this.strategy6191(indicators), this.strategy6192(indicators),
            this.strategy6193(indicators), this.strategy6194(indicators), this.strategy6195(indicators),
            this.strategy6196(indicators), this.strategy6197(indicators), this.strategy6198(indicators),
            this.strategy6199(indicators), this.strategy6200(indicators)
        ];
    }
}




