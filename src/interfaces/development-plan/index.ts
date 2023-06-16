import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface DevelopmentPlanInterface {
  id?: string;
  player_id: string;
  goals: string;
  milestones: string;
  training_activities: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  _count?: {};
}

export interface DevelopmentPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  goals?: string;
  milestones?: string;
  training_activities?: string;
}
